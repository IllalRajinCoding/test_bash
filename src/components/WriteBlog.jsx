import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../constants/blogData";
import ReactMarkdown from "react-markdown";
import { IoArrowBack } from "react-icons/io5";

const WriteBlog = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Debug logs
  useEffect(() => {
    console.log("Category:", category);
    console.log("Available blog data:", blogData);
  }, [category]);

  // Safely access blog data
  const post = category ? blogData[category.toLowerCase()] : null;

  // Handle invalid category
  if (!category || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950">
        <h1 className="text-2xl text-neutral-200 mb-4">Blog post not found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-neutral-800 text-cyan-300 rounded-lg hover:bg-neutral-700 transition-colors duration-300"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 py-12">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition-colors duration-300"
        >
          <IoArrowBack className="text-xl" />
            <span>Back to Home</span>
        </button>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
            {post.title}
          </h1>
          <div className="mb-6 text-neutral-400 flex items-center gap-2">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="prose prose-lg max-w-none prose-invert prose-headings:text-neutral-200 prose-p:text-neutral-400 prose-a:text-cyan-300 prose-strong:text-neutral-200">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteBlog;
