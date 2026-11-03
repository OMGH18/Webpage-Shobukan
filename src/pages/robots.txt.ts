// robots.txt : tout le site est ouvert aux moteurs et aux assistants IA
// (être lu = pouvoir être cité).
import type { APIRoute } from 'astro'
import { SITE } from '../data/product'

const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot',
]

export const GET: APIRoute = () => {
  const body = [
    '# Shobukan',
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    `Sitemap: ${SITE}/sitemap-index.xml`,
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
