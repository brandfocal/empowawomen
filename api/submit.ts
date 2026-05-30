import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests for security
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { form_id, input_values } = req.body;

  if (!form_id || !input_values) {
    return res.status(400).json({ error: 'Missing form_id or input_values' });
  }

  // Retrieve Gravity Forms Credentials from Vercel Environment Variables
  const gfApiUrl = process.env.GF_API_URL; // e.g., https://yourdomain.com/wp-json/gf/v2
  const consumerKey = process.env.GF_CONSUMER_KEY; // ck_...
  const consumerSecret = process.env.GF_CONSUMER_SECRET; // cs_...

  if (!gfApiUrl || !consumerKey || !consumerSecret) {
    console.error('Missing Gravity Forms API credentials in environment variables.');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Construct the endpoint for form submissions in Gravity Forms
    const endpoint = `${gfApiUrl}/forms/${form_id}/submissions`;

    // Create Basic Authentication token
    const authHeader = `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`;

    console.log(`Forwarding submission to Gravity Forms Form ID ${form_id}...`);

    const gfResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(input_values)
    });

    const data = await gfResponse.json();

    if (!gfResponse.ok) {
      console.error('Gravity Forms API responded with error:', data);
      return res.status(gfResponse.status).json({ error: data.message || 'Error from Gravity Forms' });
    }

    console.log('Gravity Forms submission successful!');
    return res.status(200).json({ success: true, entry_id: data.entry_id });

  } catch (error: any) {
    console.error('Failed to submit to Gravity Forms:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
