import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Test Supabase connection by querying the profiles table
    const { data, error } = await supabase
      .from('profiles')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Supabase API error:', error)
      return res.status(500).json({ 
        connected: false, 
        error: error.message,
        details: error.details 
      })
    }

    return res.status(200).json({ 
      connected: true, 
      message: 'Supabase connection successful!',
      data: data 
    })
  } catch (err) {
    console.error('Supabase connection failed:', err)
    return res.status(500).json({ 
      connected: false, 
      error: 'Failed to connect to Supabase',
      details: err instanceof Error ? err.message : 'Unknown error'
    })
  }
}
