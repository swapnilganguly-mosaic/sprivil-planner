export default function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.json({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  });
}
