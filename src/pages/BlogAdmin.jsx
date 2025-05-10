import { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot
} from 'firebase/firestore';

export default function BlogAdmin() {
  // 🔐 Auth state
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 📝 Blog state
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  // ✅ Set user on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      console.log("Auth state changed. Logged in:", !!firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Load posts from Firestore after login
  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(collection(db, 'blogPosts'), (snapshot) => {
      const entries = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setPosts(entries);
      console.log("Fetched posts:", entries);
    });

    return () => unsubscribe();
  }, [user]);

  // 🔐 Log in with email and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // ➕ Add new post to Firestore
  const handleAddPost = async () => {
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      title,
      content,
      date: new Date().toLocaleDateString()
    };

    await addDoc(collection(db, 'blogPosts'), newPost);

    setTitle('');
    setContent('');
  };

  // 🗑 Delete a post
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'blogPosts', id));
  };

  // ✏️ Edit post in memory
  const handleEdit = (post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  // ✅ Save edited post to Firestore
  const handleSaveEdit = async (id) => {
    await updateDoc(doc(db, 'blogPosts', id), {
      title: editTitle,
      content: editContent
    });

    setEditingId(null);
    setEditTitle('');
    setEditContent('');
  };

  // 🔐 If not logged in, show login form
  if (!user) {
    return (
      <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 p-6 border rounded shadow text-center">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Log In
        </button>
      </form>
    );
  }

  // ✅ Logged-in view
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Journal ✍🏽</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-pink-600 underline hover:text-pink-700"
        >
          Logout
        </button>
      </div>

      {/* Entry Form */}
      <div className="mb-8 p-4 border rounded shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-2">New Journal Entry</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your thoughts..."
          className="w-full p-2 border rounded mb-2 h-28"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleAddPost}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Add Entry
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-4 border rounded bg-pink-50 shadow">
            {editingId === post.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                />
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-2 border rounded mb-2 h-28"
                />
                <button
                  onClick={() => handleSaveEdit(post.id)}
                  className="bg-green-600 text-white px-4 py-1 rounded mr-2 hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
