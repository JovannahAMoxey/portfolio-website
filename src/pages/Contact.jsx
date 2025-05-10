import React from 'react';

export default function Contact() {
  return <div className="max-w-2xl mx-auto p-6 space-y-10">

    {/* Heading */}
    <h1 className="text-3xl font-bold text-pink-600">Let's Connect</h1>
    <p className="text-gray-700">Have a project idea, a question, or just want to say hi? I’d love to hear from you!</p>

    {/* Email Section */}
    <div>
      <h2 className="text-xl font-semibold">📧 Email Me</h2>
      <p className="text-pink-600 font-mono">Jov.mox@live.com</p>
    </div>

    {/* Social Media Icons */}
    <div className="flex gap-4">
      {/* Replace with lucide-react or react-icons */}
      <a href="https://instagram.com/YOURUSERNAME" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://linkedin.com/in/YOURUSERNAME" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>

    {/* Contact Form (Optional) */}
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Your message..." className="w-full p-2 border rounded h-32" />
      <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">
        Send Message
      </button>
    </form>

  </div>

}
