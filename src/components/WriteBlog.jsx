import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../constants/blogData";
import ReactMarkdown from "react-markdown";
import { IoArrowBack } from "react-icons/io5";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 p-4">
        <h1 className="text-xl md:text-2xl text-neutral-200 mb-4 text-center">
          Blog post not found
        </h1>
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
    <div className="  text-neutral-300 py-4 md:py-12">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 z-[-1] opacity-10 animate-background-grid" />
      </div>
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition-colors duration-300 text-base md:text-lg"
        >
          <IoArrowBack className="text-xl md:text-2xl" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <article className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-4 md:p-8 lg:p-12">
          {/* Header */}
          <header className="mb-6 md:mb-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400 text-sm md:text-lg">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-sm sm:prose-base md:prose-lg max-w-none 
            prose-headings:font-bold 
            prose-h1:text-2xl md:prose-h1:text-3xl prose-h1:text-neutral-100 prose-h1:mb-6 md:prose-h1:mb-8
            prose-h2:text-xl md:prose-h2:text-2xl prose-h2:text-neutral-200 prose-h2:mt-8 md:prose-h2:mt-12 prose-h2:mb-4 md:prose-h2:mb-6
            prose-h3:text-lg md:prose-h3:text-xl prose-h3:text-neutral-300 prose-h3:mt-6 md:prose-h3:mt-8 prose-h3:mb-3 md:prose-h3:mb-4
            prose-p:text-neutral-300 prose-p:leading-relaxed md:prose-p:leading-relaxed prose-p:mb-4 md:prose-p:mb-6
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
            prose-strong:text-neutral-200
            prose-code:text-neutral-200 prose-code:bg-neutral-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-xs md:prose-code:text-sm
            prose-pre:bg-neutral-800/50 prose-pre:border prose-pre:border-neutral-700 prose-pre:text-xs md:prose-pre:text-sm
            prose-li:text-neutral-300 prose-li:leading-relaxed
            prose-ul:my-4 md:prose-ul:my-6 prose-ol:my-4 md:prose-ol:my-6
            prose-img:rounded-lg prose-img:border prose-img:border-neutral-700 prose-img:mx-auto"
          >
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg !bg-neutral-800/50 !p-3 md:!p-4 border border-neutral-700 text-xs md:text-sm"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WriteBlog;
