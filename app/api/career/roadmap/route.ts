import { NextRequest, NextResponse } from 'next/server' 
import { callOpenAI } from '@/lib/openai' 
 
export async function POST(request: NextRequest) { 
  try { 
    const body = await request.json() 
    const { userProfile, assessment } = body 
 
    const systemPrompt = 'You are an expert career coach. Create detailed career roadmaps. Always respond with valid JSON.' 
    const prompt = `Create a detailed career roadmap for transitioning to ${userProfile.targetRole}. 
ECHO is on.
    User Profile: 
    - Current Role: ${userProfile.currentRole} 
    - Experience: ${userProfile.experience} years 
    - Skills: ${userProfile.skills.join(', ')} 
    - Timeline: ${userProfile.timeline} 
ECHO is on.
    Assessment: ${JSON.stringify(assessment)} 
ECHO is on.
    Create a roadmap with 3-4 phases. For each phase include: 
    - Phase name 
    - Timeline (e.g., "3-6 months") 
    - Skills to learn (with priority: high/medium/low and resources) 
    - Projects to build 
    - Milestones with deadlines 
    - Certifications if applicable 
ECHO is on.
    Output as JSON with this structure: 
    { 
      "phases": [ 
        { 
          "name": "Phase name", 
          "timeline": "timeline", 
          "skills": [{"name": "skill", "priority": "high|medium|low", "resources": ["resource1", "resource2"]}], 
          "projects": [{"name": "project", "description": "desc", "timeline": "timeline"}], 
          "milestones": [{"name": "milestone", "deadline": "date", "completed": false}], 
          "certifications": [{"name": "cert", "provider": "provider", "deadline": "date"}] 
        } 
      ] 
    }` 
 
    const response = await callOpenAI(prompt, systemPrompt) 
 
    return NextResponse.json({ json: JSON.parse(response), text: response }) 
  } catch (error) { 
    console.error('Roadmap generation error:', error) 
    return NextResponse.json( 
      { error: 'Failed to generate roadmap' }, 
      { status: 500 } 
    ) 
  } 
} 
