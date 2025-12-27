
import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Flame, Droplets, Wind, Mountain, Loader2 } from 'lucide-react';

const GeminiMood: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ color: string; pattern: string } | null>(null);

  const generateVibe = async (vibe: string) => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Generate a CSS color code and a one-word CSS animation name for the following element: ${vibe}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,