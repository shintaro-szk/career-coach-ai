import OpenAI from 'openai' 
 
const OPENAI_API_KEY = process.env.OPENAI_API_KEY! 
 
if (!OPENAI_API_KEY) { 
  throw new Error('Please define OPENAI_API_KEY in .env.local') 
} 
 
const openai = new OpenAI({ 
  apiKey: OPENAI_API_KEY, 
}) 
 
  try { 
    const response = await openai.chat.completions.create({ 
      model: 'gpt-4o-mini', 
      messages: [ 
        ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []), 
        { role: 'user', content: prompt }, 
      ], 
      temperature: 0.7, 
      max_tokens: 2000, 
    }) 
 
  } catch (error) { 
    console.error('OpenAI API error:', error) 
    throw error 
  } 
} 
