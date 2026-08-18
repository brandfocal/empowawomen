import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';
import url from 'url';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const gfApiUrl = process.env.GF_API_URL;
  const consumerKey = process.env.GF_CONSUMER_KEY;
  const consumerSecret = process.env.GF_CONSUMER_SECRET;

  if (!gfApiUrl || !consumerKey || !consumerSecret) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  const sendToGF = (formId: number, payload: any, isUrlEncoded = false) => {
    const separator = gfApiUrl.includes('?') ? '&' : '?';
    const targetUrl = `${gfApiUrl}/forms/${formId}/submissions${separator}consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const parsedUrl = url.parse(targetUrl);
    const authHeader = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`;

    let postData = '';
    let contentType = 'application/json';

    if (isUrlEncoded) {
      contentType = 'application/x-www-form-urlencoded';
      const params = new URLSearchParams();
      Object.keys(payload).forEach(key => {
        params.append(key, payload[key]);
      });
      postData = params.toString();
    } else {
      postData = JSON.stringify(payload);
    }

    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || 443,
      path: parsedUrl.path,
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        'Authorization': authHeader,
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    return new Promise((resolve, reject) => {
      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (chunk) => { body += chunk; });
        response.on('end', () => {
          resolve({ statusCode: response.statusCode, body });
        });
      });
      request.on('error', reject);
      request.write(postData);
      request.end();
    });
  };

  try {
    const flatPayload = {
      'input_1': 'Test Flat Name',
      'input_3': 'flat@example.com',
      'input_4': 'Test Flat Org',
      'input_5': 'Tier 2: Platinum Industry Partner',
      'input_6': 'Corporate ESG',
      'input_7': 'Green Economy'
    };

    // Test 1: Submit Form 23 with FLAT payload (JSON)
    const jsonResult: any = await sendToGF(23, flatPayload, false);

    // Test 2: Submit Form 23 with FLAT payload (URL-encoded)
    const urlencodedResult: any = await sendToGF(23, flatPayload, true);

    return res.status(200).json({
      jsonTest: {
        statusCode: jsonResult.statusCode,
        body: JSON.parse(jsonResult.body)
      },
      urlencodedTest: {
        statusCode: urlencodedResult.statusCode,
        body: JSON.parse(urlencodedResult.body)
      }
    });

  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
