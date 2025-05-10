// Projects.jsx — Book-style Projects Page with Cover, TOC, and Flip Navigation

import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import HTMLFlipBook from 'react-pageflip';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const bookRef = useRef();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-6 space-y-6">

      {/* 📘 Flipbook Component */}
      <HTMLFlipBook
        ref={bookRef}
        width={350}
        height={500}
        size="stretch"
        minWidth={315}
        maxWidth={800}
        minHeight={400}
        maxHeight={700}
        showCover={true}
        mobileScrollSupport={true}
        className="shadow-2xl"
      >
        {/* 📖 Custom Cover Page */}
        <div className="bg-pink-100 p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">📘 Jovi’s Project Book</h1>
          <p className="text-gray-700 text-sm mb-2">Flip through to explore the projects I've built with love, learning, and a touch of fun.</p>
          <p className="text-xs text-gray-500">Click the arrows below to begin</p>
        </div>

        {/* 📑 Table of Contents */}
        <div className="bg-pink-50 p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">📑 Table of Contents</h2>
          <ul className="space-y-2">
            {projects.map((project, i) => (
              <li key={project.id}>
                <button
                  onClick={() => bookRef.current.pageFlip().flip(i + 2)}
                  className="text-pink-700 hover:underline text-sm"
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 📄 Project Pages */}
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 flex flex-col items-center justify-center text-center">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 w-full h-40 object-cover rounded"
              />
            )}
            <h2 className="text-lg font-bold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-700 mb-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-pink-600 underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </HTMLFlipBook>

      {/* ⬅️➡️ Flip Arrows */}
      <div className="flex gap-8">
        <button
          onClick={() => bookRef.current.pageFlip().flipPrev()}
          className="text-pink-600 font-bold text-lg hover:scale-110 transition"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={() => bookRef.current.pageFlip().flipNext()}
          className="text-pink-600 font-bold text-lg hover:scale-110 transition"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
