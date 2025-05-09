import React from 'react';
import { Heart, Sparkles, Code, Book, Gamepad2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Jovi.Dev</title>
      </Helmet>

      <div className="min-h-screen bg-pink-50 flex flex-col items-center px-6 py-12 text-center">

        {/* 💖 Heading */}
        <h1 className="text-5xl font-bold text-pink-600 mb-4 font-handwriting">Hi, I’m Jovi 💕</h1>
        <p className="max-w-2xl text-gray-700 text-lg mb-8">
          I’m a Computer Science student with a passion for design, creativity, and making soft, magical digital spaces.
          Whether I’m coding a playful UI, building a game, or exploring my faith, I love learning and creating things that bring joy.
        </p>

        {/* 🌸 Things I Love Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-pink-600 mb-12">
          <div className="flex flex-col items-center">
            <Code className="w-8 h-8" />
            <span className="mt-2 font-medium">Coding</span>
          </div>
          <div className="flex flex-col items-center">
            <Gamepad2 className="w-8 h-8" />
            <span className="mt-2 font-medium">Gaming</span>
          </div>
          <div className="flex flex-col items-center">
            <Book className="w-8 h-8" />
            <span className="mt-2 font-medium">Learning</span>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="w-8 h-8" />
            <span className="mt-2 font-medium">Helping People</span>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-8 h-8" />
            <span className="mt-2 font-medium">Soft Aesthetic</span>
          </div>
        </div>

        {/* Optional timeline or quote */}
        <blockquote className="italic text-pink-800 max-w-xl">
          “God is within her, she will not fall.” — Psalm 46:5
        </blockquote>
      </div>
    </>
  );
}
