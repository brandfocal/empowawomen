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

  const sendToGF = (formId: number, payload: any) => {
    const separator = gfApiUrl.includes('?') ? '&' : '?';
    const targetUrl = `${gfApiUrl}/forms/${formId}/submissions${separator}consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const parsedUrl = url.parse(targetUrl);
    const authHeader = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`;

    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || 443,
      path: parsedUrl.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
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
      request.write(JSON.stringify(payload));
      request.end();
    });
  };

  try {
    // Test 1: Submit Form 23 with FLAT payload
    const flatPayload = {
      'input_1': 'Test Flat Name',
      'input_3': 'flat@example.com',
      'input_4': 'Test Flat Org',
      'input_5': 'Tier 2: Platinum Industry Partner',
      'input_6': 'Corporate ESG',
      'input_7': 'Green Economy'
    };
    const flatResult: any = await sendToGF(23, flatPayload);

    // Test 2: Submit Form 23 with WRAPPED payload
    const wrappedPayload = {
      'input_values': {
        'input_1': 'Test Wrapped Name',
        'input_3': 'wrapped@example.com',
        'input_4': 'Test Wrapped Org',
        'input_5': 'Tier 2: Platinum Industry Partner',
        'input_6': 'Corporate ESG',
        'input_7': 'Green Economy'
      }
    };
    const wrappedResult: any = await sendToGF(23, wrappedPayload);

    return res.status(200).json({
      flatTest: {
        statusCode: flatResult.statusCode,
        body: JSON.parse(flatResult.body)
      },
      wrappedTest: {
        statusCode: wrappedResult.statusCode,
        body: JSON.parse(wrappedResult.body)
      }
    });

  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
