import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';
import url from 'url';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Force clean Vercel backend build trigger
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { form_id, input_values } = req.body;

  if (!form_id || !input_values) {
    return res.status(400).json({ error: 'Missing form_id or input_values' });
  }

  const gfApiUrl = process.env.GF_API_URL;
  const consumerKey = process.env.GF_CONSUMER_KEY;
  const consumerSecret = process.env.GF_CONSUMER_SECRET;

  // Provide highly explicit error descriptions if credentials aren't set in Vercel
  if (!gfApiUrl || !consumerKey || !consumerSecret) {
    return res.status(500).json({ 
      error: 'Vercel Server Setup Error: Missing Environment Variables. Please define GF_API_URL, GF_CONSUMER_KEY, and GF_CONSUMER_SECRET in your Vercel Project Settings.' 
    });
  }

  try {
    // Append credentials as query parameters to bypass hosting firewalls that block standard HTTP Authorization headers
    const separator = gfApiUrl.includes('?') ? '&' : '?';
    const targetUrl = `${gfApiUrl}/forms/${form_id}/submissions${separator}consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const parsedUrl = url.parse(targetUrl);
    const authHeader = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`;



    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || 443,
      path: parsedUrl.path, // parsedUrl.path contains the query string params
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader, // keep header as double fallback
        'User-Agent': 'Vercel-Serverless-Proxy'
      }
    };

    const postData = JSON.stringify(input_values);

    // Promise wrapper around native https request for ultimate runtime safety
    const makeRequest = () => {
      return new Promise<{ statusCode?: number; body: string }>((resolve, reject) => {
        const request = https.request(options, (response) => {
          let body = '';
          response.setEncoding('utf8');
          response.on('data', (chunk) => { body += chunk; });
          response.on('end', () => {
            resolve({
              statusCode: response.statusCode,
              body: body
            });
          });
        });

        request.on('error', (err) => { reject(err); });
        request.write(postData);
        request.end();
      });
    };

    const result = await makeRequest();
    let responseBody;
    
    const isHtml = result.body.trim().startsWith('<!DOCTYPE') || result.body.trim().startsWith('<html');
    if (isHtml) {
      responseBody = {
        message: 'The WordPress server returned an HTML page (likely a 404 Not Found or a server error). This usually indicates that the Gravity Forms REST API v2 is not enabled on your WordPress site, or the GF_API_URL environment variable is configured incorrectly in your Vercel dashboard. Please ensure the REST API is enabled in your WordPress dashboard (Forms > Settings > REST API).'
      };
    } else {
      try {
        responseBody = JSON.parse(result.body);
      } catch (e) {
        responseBody = { message: result.body };
      }
    }

    if (result.statusCode && (result.statusCode < 200 || result.statusCode >= 300)) {
      console.error('Gravity Forms API responded with error status:', result.statusCode, responseBody);
      let errorMsg = responseBody.message;
      if (responseBody.validation_messages && typeof responseBody.validation_messages === 'object') {
        const valErrors = Object.entries(responseBody.validation_messages)
          .map(([id, msg]) => `Field ${id}: ${msg}`)
          .join(', ');
        errorMsg = `Validation failed: ${valErrors}`;
      }
      return res.status(result.statusCode).json({ 
        error: errorMsg || `Gravity Forms responded with status ${result.statusCode}` 
      });
    }

    return res.status(200).json({ success: true, entry_id: responseBody.entry_id });

  } catch (error: any) {
    console.error('Serverless proxy encountered exception:', error);
    return res.status(500).json({ 
      error: `Proxy Server Error: ${error.message || 'Internal connection error'}` 
    });
  }
}
