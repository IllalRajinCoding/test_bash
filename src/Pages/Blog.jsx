import React from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../constants/blogData";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (category) => {
    navigate(`/blog/${category.toLowerCase()}`);
  };

  return (
    <section className="p-20">
      {/* Header */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="my-20 text-center text-4xl">
          Blog & <span className="text-neutral-500">Learning</span>
        </h2>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Object.entries(blogData).map(([category, post]) => (
          <article
            key={category}
            onClick={() => handlePostClick(category)}
            className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 hover:border-neutral-700 
              shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-neutral-200 mb-4 group-hover:text-cyan-300 transition-colors">
                {post.title}
              </h3>
              <div className="text-neutral-400 text-sm mb-4 flex items-center gap-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-neutral-400 line-clamp-3">
                {post.content.split("\n")[3].replace(/[#\-]/g, "").trim()}
              </p>
            </div>
            <div className="px-6 py-4 border-t border-neutral-800">
              <span className="inline-block bg-neutral-800 text-cyan-300 text-xs px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
};

export default Blog;
