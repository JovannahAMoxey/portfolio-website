import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Jovi.Dev</title>
        <meta
          name="description"
          content="Welcome to Jovi's portfolio – a soft, creative space for frontend magic and playful development."
        />
      </Helmet>

      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-10 px-4 bg-pink-50 overflow-hidden">

        {/* 🌸 Animated background blur bubbles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl animate-pulse top-10 left-10"></div>
          <div className="absolute w-96 h-96 bg-rose-100 rounded-full opacity-25 blur-2xl animate-drift-slow bottom-0 right-0"></div>
          <div className="absolute w-80 h-80 bg-pink-300 rounded-full opacity-20 blur-2xl animate-pulse top-1/2 right-1/3"></div>
          <div className="absolute w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl animate-drift-slow top-10 left-10"></div>
          <div className="absolute w-96 h-96 bg-rose-100 rounded-full opacity-25 blur-2xl animate-drift-slow top-0 right-0"></div>
        </div>

        {/* 🎈 Floating animated bubble */}
        <motion.div
          className="absolute w-40 h-40 bg-pink-300 rounded-full blur-2xl opacity-30 z-0"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 🖼 Profile Image */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-pink-300 z-10">
          <img
            src="/images/Jovi.jpg"  // 👉 Make sure your image is inside public/images/
            alt="Jovannah"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 rounded-full animate-hover bg-pink-100 opacity-20 blur-2xl -z-10"></div>
        </div>

        {/* 💬 Intro Text */}
        <section className="text-center md:text-left max-w-lg z-10">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Hey, I'm Jovannah 👋</h1>
          <p className="text-lg text-gray-600 mb-6">
            A passionate Computer Science student creating soft, playful web experiences with React & Tailwind.
          </p>
          <Link
            to="/projects"
            className="group relative text-white px-6 py-3 rounded-full shadow-md bg-pink-500 hover:bg-pink-600 transition inline-flex items-center gap-2 overflow-hidden"
          >
            {/* ✨ Pulsing border effect */}
            <span className="absolute inset-0 rounded-full border-2 border-pink-400 animate-pulse pointer-events-none"></span>

            {/* 🌟 Button Text and Sparkle Icon */}
            <span className="relative z-10 inline-flex items-center gap-2">
              See My Projects
              <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition duration-300" />
            </span>
          </Link>

        </section>
      </div>
    </>
  );
}
