// Vercel Serverless Function to provide API key securely
// This endpoint is called by the frontend to get the API key

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get API key from environment variable
  const apiKey = process.env.OPENWEATHER_API_KEY;

  // Check if API key is configured
  if (!apiKey) {
    return res.status(500).json({
      error: 'API key not configured',
      message: 'OPENWEATHER_API_KEY environment variable is not set in Vercel'
    });
  }

  // Return the API key securely
  return res.status(200).json({
    apiKey: apiKey
  });
}
