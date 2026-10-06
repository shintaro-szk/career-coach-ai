import { NextRequest, NextResponse } from 'next/server' 
import { callOpenAI } from '@/lib/openai' 
 
export async function POST(request: NextRequest) { 
  try { 
    const body = await request.json() 
    const { currentRole, targetRole, experience, skills, timeline, constraints } = body 
 
    const systemPrompt = 'You are an expert career coach. Analyze career transitions and provide actionable advice. Always respond with valid JSON.' 
    const prompt = `Analyze the career transition from ${currentRole} to ${targetRole}. 
    Consider the user has ${experience} years of experience and these skills: ${skills.join(', ')}. 
    Target timeline: ${timeline}. 
 
    Provide: 
    1) Feasibility assessment (high/medium/low) 
    2) Estimated timeline in months 
    3) Key challenges (array of strings) 
    4) Recommended first steps (array of strings) 
 
    Output as JSON with this exact structure: 
    { 
      "feasibility": "high|medium|low", 
      "timeline_estimate": "number of months", 
