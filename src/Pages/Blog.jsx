import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogData } from "../constants/blogData";
import { motion } from "framer-motion";

const Blog = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  
  // Get all blog entries
  const blogEntries = Object.entries(blogData);
  
  // Determine which posts to show based on state
  const postsToShow = showAll ? blogEntries : blogEntries.slice(0, 3);

  const handlePostClick = (category) => {
    navigate(`/blog/${category.toLowerCase()}`);
  };

  return (
    <section className="px-4 py-12 sm:p-16 md:p-20">
      {/* Header */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Blog & <span className="text-neutral-500">Learning</span>
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Explore my articles and tutorials
        </p>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {postsToShow.map(([category, post]) => (
          <article
            key={category}
            onClick={() => handlePostClick(category)}
            className="bg-neutral-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl 
              border border-neutral-800 hover:border-neutral-700 
              shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 
              cursor-pointer group overflow-hidden"
          >
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 
                mb-2 sm:mb-4 group-hover:text-cyan-300 transition-colors 
                line-clamp-2"
              >
                {post.title}
              </h3>
              <div className="text-neutral-400 text-xs sm:text-sm mb-3 
                flex items-center flex-wrap gap-2"
              >
                <span>{post.date}</span>
                <span className="hidden sm:inline">•</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-neutral-400 text-sm sm:text-base line-clamp-3">
                {post.content.split("\n")[3]?.replace(/[#\-]/g, "").trim() || "Read more..."}
              </p>
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-neutral-800">
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-neutral-800 text-cyan-300 
                      text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </motion.div>

      {/* View More Button (only show if there are more than 3 posts) */}
      {blogEntries.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 
              text-cyan-300 rounded-lg transition-colors duration-300
              border border-neutral-700 hover:border-cyan-300/50"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Blog;