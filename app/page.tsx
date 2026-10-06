import Link from 'next/link';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Mic, Brain, Globe, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">
            Career Coach AI
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            Voice-Enabled Career Guidance with Multi-Language Support
          </p>
          <Link href="/assess">
            <Button size="lg" className="text-lg">
              Start Your Career Journey
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Mic className="w-12 h-12 text-purple-500 mb-2" />
              <CardTitle>Voice First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Talk naturally to your AI career coach. No typing required.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="w-12 h-12 text-purple-500 mb-2" />
              <CardTitle>AI Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advanced agentic AI analyzes your profile and creates personalized roadmaps.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="w-12 h-12 text-purple-500 mb-2" />
              <CardTitle>Multi-Language</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Support for English, Mandarin, Hindi, and Spanish.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-purple-500 mb-2" />
              <CardTitle>Actionable Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get specific steps, timelines, and resources to achieve your career goals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
} 
