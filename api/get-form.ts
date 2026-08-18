import type { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';
import url from 'url';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Missing form id' });
  }

  const gfApiUrl = process.env.GF_API_URL;
  const consumerKey = process.env.GF_CONSUMER_KEY;
  const consumerSecret = process.env.GF_CONSUMER_SECRET;

  if (!gfApiUrl || !consumerKey || !consumerSecret) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  const separator = gfApiUrl.includes('?') ? '&' : '?';
  const targetUrl = `${gfApiUrl}/forms/${id}${separator}consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
  const parsedUrl = url.parse(targetUrl);

  const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || 443,
    path: parsedUrl.path,
    method: 'GET'
  };

  https.get(options, (response) => {
    let body = '';
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.status(response.statusCode || 200).send(body);
    });
  }).on('error', (err) => {
    res.status(500).json({ error: err.message });
  });
}
