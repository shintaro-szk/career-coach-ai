# Career Coach AI

Voice-enabled AI career guidance platform with multi-language support.

## Overview

Career Coach AI provides personalized career guidance through voice interaction. Users speak to an AI coach that analyzes their profile and creates actionable career roadmaps. The system supports English, Mandarin, Hindi, and Spanish.

## Features

- Voice-first interaction using speech recognition
- AI-powered career analysis and planning
- Multi-language support (English, Mandarin, Hindi, Spanish)
- Personalized career roadmaps with specific action steps
- Timeline-based goal tracking
- Resource recommendations

## Tech Stack

### Frontend
- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI components

### Backend & AI
- OpenAI API for AI responses
- ElevenLabs for text-to-speech
- MongoDB with Mongoose for data persistence
- Express.js API routes

### Voice
- React Speech Recognition for voice input
- ElevenLabs for voice output

## Prerequisites

- Node.js 20 or higher
- MongoDB instance (local or cloud)
- OpenAI API key
- ElevenLabs API key

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── api/           # API route handlers
├── components/    # React components
├── lib/          # Utility functions
├── models/       # Mongoose schemas
└── page.tsx      # Landing page
```

## Data Models

- User: User profiles and preferences
- Conversation: Chat history with AI coach
- CareerPlan: Generated career roadmaps

## Development

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linter:

```bash
npm run lint
```

## License

MIT
