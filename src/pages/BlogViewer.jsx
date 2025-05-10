import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function BlogViewer() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogPosts'), (snapshot) => {
      const entries = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));

      // Set all posts
      setPosts(entries);

      // Find and set featured post
      const featured = entries.find(post => post.featured);
      setFeaturedPost(featured || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">

      {/* 🌟 Featured Post Section */}
      {featuredPost && (
        <section className="bg-pink-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">🌟 Featured Journal</h2>
          <h3 className="text-xl font-semibold">{featuredPost.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{featuredPost.date}</p>
          <p className="text-gray-700">{featuredPost.content}</p>
        </section>
      )}

      {/* 📚 All Other Posts */}
      <section>
        <h2 className="text-xl font-bold mb-4">📖 All Journal Entries</h2>
        <div className="space-y-6">
          {posts
            .filter(post => !post.featured)
            .map(post => (
              <div key={post.id} className="p-4 border rounded bg-white shadow-sm">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
