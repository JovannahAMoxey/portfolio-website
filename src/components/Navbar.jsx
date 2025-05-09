// 1. Import the Link component from React Router for page navigation
import { Link } from 'react-router-dom';

// 2. Import heart and sparkle icons from lucide-react
import { Heart, Sparkles } from 'lucide-react';

// 3. Export the Navbar component so it can be used in App.jsx or elsewhere
export default function Navbar() {
  return (
    // Main nav container: pink background, padding, and horizontal layout
    <nav
      style={{
        background: "pink",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between" // space between logo and nav links
      }}
    >

      {/* Left side: Logo and decorative icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem" // space between heart, text, and sparkles
        }}
      >
        {/* Heart icon on the left */}
        <Heart size={20} color="#d63384" />

        {/* Brand name or site title */}
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#a61e4d" // a darker pink for contrast
          }}
        >
          Jovi'sDevDiary
        </span>

        {/* Sparkles icon on the right */}
        <Sparkles size={20} color="#f783ac" className="w-5 h-5 animate-pulse" />
      </div>

      {/* Right side: Navigation links */}
      <div
        style={{
          display: "flex",
          gap: "1rem" // space between nav links
        }}
      >
        {/* Link to homepage */}
        <Link to="/" className="px-4 py-2 rounded-md hover:bg-pink-100 hover:text-pink-600 transition font-medium"> Home </Link>


        {/* Link to about page */}
        <Link to="/About" className="px-4 py-2 rounded-md hover:bg-pink-100 hover:text-pink-600 transition font-medium">About</Link>

        <Link to="/contact" className="px-4 py-2 rounded-md hover:bg-pink-100 hover:text-pink-600 transition font-medium" >Contact</Link>

        <Link to="/blog" className="px-4 py-2 rounded-md hover:bg-pink-100 hover:text-pink-600 transition font-medium">Blog</Link>



      </div>
    </nav>
  );
}


