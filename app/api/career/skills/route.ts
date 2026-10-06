import { NextRequest, NextResponse } from 'next/server' 
import { callOpenAI } from '@/lib/openai' 
 
export async function POST(request: NextRequest) { 
  try { 
    const body = await request.json() 
    const { currentSkills, targetRole } = body 
 
    const systemPrompt = 'You are an expert career coach. Analyze skill gaps for career transitions. Always respond with valid JSON.' 
    const prompt = `Analyze the skill gap for transitioning to ${targetRole}. 
ECHO is on.
    Current Skills: ${currentSkills.join(', ')} 
ECHO is on.
    Identify: 
    1) Skills the user already has that are relevant 
    2) Skills they need to acquire (categorized by priority) 
    3) Recommended learning resources for each missing skill 
ECHO is on.
    Output as JSON with this structure: 
    { 
      "existing_skills": ["skill1", "skill2"], 
      "missing_skills": [ 
        {"name": "skill", "priority": "high|medium|low", "category": "category", "resources": ["resource1", "resource2"]} 
      ], 
      "overall_readiness": "percentage" 
    }` 
 
    const response = await callOpenAI(prompt, systemPrompt) 
 
    return NextResponse.json({ json: JSON.parse(response), text: response }) 
  } catch (error) { 
    console.error('Skill analysis error:', error) 
    return NextResponse.json( 
      { error: 'Failed to analyze skills' }, 
      { status: 500 } 
    ) 
  } 
} 
