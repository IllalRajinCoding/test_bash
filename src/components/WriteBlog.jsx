import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../constants/blogData";
import ReactMarkdown from "react-markdown";
import { IoArrowBack, IoShareSocial, IoCheckmark } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaCopy } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const WriteBlog = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get post data first
  const post = category ? blogData[category.toLowerCase()] : null;

  // SEO untuk blog post
  useEffect(() => {
    if (post) {
      // Update title untuk SEO
      document.title = `${post.title} | Blog Robbanie Hillaly`;
      
      // Extract preview text
      const previewText = post.content.split('\n')
        .find(line => line.trim() && !line.startsWith('#'))
        ?.replace(/[#\-*`]/g, '')
        .trim() || post.title;

      // Update meta tags
      const updateMetaTag = (name, content, property = false) => {
        const attribute = property ? 'property' : 'name';
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attribute, name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      const currentUrl = `https://www.loxyland.web.id/blog/${category}`;
      
      updateMetaTag('description', `${previewText.substring(0, 150)}... Tutorial dan tips programming dari Robbanie Hillaly.`);
      updateMetaTag('keywords', `${post.tags?.join(', ') || ''}, tutorial programming, robbanie hillaly, blog developer`);
      
      // Open Graph
      updateMetaTag('og:title', `${post.title} | Blog Robbanie Hillaly`, true);
      updateMetaTag('og:description', `${previewText.substring(0, 150)}...`, true);
      updateMetaTag('og:url', currentUrl, true);
      updateMetaTag('og:type', 'article', true);
      
      // Twitter
      updateMetaTag('twitter:title', `${post.title} | Blog Robbanie Hillaly`, true);
      updateMetaTag('twitter:description', `${previewText.substring(0, 150)}...`, true);
    }
  }, [category, post]);

  // Share functions
  const getCurrentUrl = () => {
    return `https://www.loxyland.web.id/blog/${category}`;
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCurrentUrl())}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(getCurrentUrl())}&text=${encodeURIComponent(post?.title || '')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getCurrentUrl())}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${post?.title || ''} - ${getCurrentUrl()}`)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = getCurrentUrl();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Close modal when clicking outside
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowShareModal(false);
    }
  };

  const ShareModal = () => (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleModalClose}
    >
      <div className="bg-neutral-900 rounded-xl border border-neutral-700 p-6 max-w-md w-full relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-neutral-200">Share Article</h3>
          <button
            onClick={() => setShowShareModal(false)}
            className="text-neutral-400 hover:text-neutral-200 text-xl"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Social Media Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => window.open(shareLinks.facebook, '_blank')}
              className="flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="text-xl" />
              <span className="text-white font-medium">Facebook</span>
            </button>
            
            <button
              onClick={() => window.open(shareLinks.twitter, '_blank')}
              className="flex items-center gap-3 p-3 bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="text-xl" />
              <span className="text-white font-medium">Twitter</span>
            </button>
            
            <button
              onClick={() => window.open(shareLinks.linkedin, '_blank')}
              className="flex items-center gap-3 p-3 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="text-xl" />
              <span className="text-white font-medium">LinkedIn</span>
            </button>
            
            <button
              onClick={() => window.open(shareLinks.whatsapp, '_blank')}
              className="flex items-center gap-3 p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-white font-medium">WhatsApp</span>
            </button>
          </div>
          
          {/* Copy Link */}
          <div className="border-t border-neutral-700 pt-4">
            <div className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg">
              <input
                type="text"
                value={getCurrentUrl()}
                readOnly
                className="flex-1 bg-transparent text-neutral-300 text-sm outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded text-white text-sm transition-colors"
                aria-label="Copy link"
              >
                {copied ? <IoCheckmark /> : <FaCopy />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Handle case when post is not found
  if (!category || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 p-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl text-neutral-200 mb-4">
            Blog post not found
          </h1>
          <p className="text-neutral-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-neutral-800 text-cyan-300 rounded-lg hover:bg-neutral-700 transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <IoArrowBack />
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 py-4 md:py-12">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Header with Back and Share */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mb-6 md:mb-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition-colors duration-300 text-base md:text-lg"
          >
            <IoArrowBack className="text-xl md:text-2xl" />
            <span>Back to Home</span>
          </button>
          
          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-cyan-300 rounded-lg transition-colors duration-300"
          >
            <IoShareSocial className="text-lg" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <article className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-6 md:p-8 lg:p-12">
          {/* Header */}
          <header className="mb-8 md:mb-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-neutral-400 text-sm md:text-base">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-neutral-800 text-cyan-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none 
            prose-headings:font-bold 
            prose-h1:text-2xl md:prose-h1:text-3xl prose-h1:text-neutral-100 prose-h1:mb-6 md:prose-h1:mb-8
            prose-h2:text-xl md:prose-h2:text-2xl prose-h2:text-neutral-200 prose-h2:mt-8 md:prose-h2:mt-12 prose-h2:mb-4 md:prose-h2:mb-6
            prose-h3:text-lg md:prose-h3:text-xl prose-h3:text-neutral-300 prose-h3:mt-6 md:prose-h3:mt-8 prose-h3:mb-3 md:prose-h3:mb-4
            prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-4 md:prose-p:mb-6
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
            prose-strong:text-neutral-200
            prose-code:text-neutral-200 prose-code:bg-neutral-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-neutral-800/50 prose-pre:border prose-pre:border-neutral-700
            prose-li:text-neutral-300 prose-li:leading-relaxed prose-li:mb-2
            prose-ul:my-4 md:prose-ul:my-6 prose-ol:my-4 md:prose-ol:my-6
            prose-blockquote:border-l-cyan-400 prose-blockquote:bg-neutral-800/30 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
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
                      className="rounded-lg !bg-neutral-800/50 !p-4 border border-neutral-700 text-sm overflow-x-auto"
                      customStyle={{
                        margin: 0,
                        background: 'rgba(38, 38, 38, 0.5)',
                      }}
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

      {/* Share Modal */}
      {showShareModal && <ShareModal />}
    </div>
  );
};

export default WriteBlog;