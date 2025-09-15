import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // This is a placeholder implementation
    // In a real app, you would:
    // 1. Get user ID from session/auth
    // 2. Call Plaid API to create link token
    // 3. Return the actual link token
    
    res.status(200).json({
      link_token: 'demo-link-token-placeholder'
    })
  } catch (error) {
    console.error('Error creating link token:', error)
    res.status(500).json({ error: 'Failed to create link token' })
  }
}
