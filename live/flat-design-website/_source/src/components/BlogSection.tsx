import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const getPillColor = (color: BlogPost['categoryColor']) => {
    switch (color) {
      case 'sky':
        return 'bg-[#0984E3] text-white';
      case 'orange':
        return 'bg-[#FF7675] text-white';
      case 'green':
        return 'bg-[#2ECC71] text-white';
      default:
        return 'bg-[#2D3436] text-white';
    }
  };

  return (
    <section id="blog" className="w-full bg-[#F8F9FA] py-16 sm:py-20 border-b-2 border-[#E9ECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white border-2 border-[#2D3436] px-3.5 py-1.5 rounded-md mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71]"></span>
              <span className="text-xs font-black uppercase text-[#2D3436] tracking-wider">
                AGENCY INSIGHTS & BLOG
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2D3436] uppercase tracking-tight font-sans">
              THOUGHT LEADERSHIP
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-bold text-gray-600 max-w-xs">
            Deep dives on Flat Design UI, campaign conversions, and high-speed web engineering.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white border-3 border-[#2D3436] rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-[#0984E3]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded uppercase tracking-wider ${getPillColor(post.categoryColor)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-bold text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#2D3436] uppercase font-sans mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-700 font-semibold leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 border-t border-gray-100 pt-4 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#2D3436] text-white flex items-center justify-center font-black text-xs">
                    {post.author.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#2D3436]">{post.author.name}</div>
                    <div className="text-[10px] text-gray-500 font-semibold">{post.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full bg-[#F8F9FA] hover:bg-[#0984E3] hover:text-white text-[#2D3436] font-extrabold text-xs py-3 rounded-xl uppercase tracking-wider border-2 border-[#2D3436] transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>READ ARTICLE</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FULL ARTICLE READER MODAL */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-none">
            <div className="bg-white border-4 border-[#2D3436] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black font-black text-xl bg-gray-100 hover:bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-2 mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded uppercase ${getPillColor(selectedPost.categoryColor)}`}>
                  {selectedPost.category}
                </span>
                <span className="text-xs font-bold text-gray-500">• {selectedPost.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#2D3436] uppercase font-sans mb-4">
                {selectedPost.title}
              </h3>

              <div className="flex items-center space-x-3 bg-[#F8F9FA] p-3 rounded-xl border border-[#E9ECEF] mb-6">
                <div className="w-9 h-9 rounded-full bg-[#0984E3] text-white flex items-center justify-center font-black text-sm">
                  {selectedPost.author.name[0]}
                </div>
                <div>
                  <div className="text-xs font-black text-[#2D3436]">{selectedPost.author.name}</div>
                  <div className="text-[10px] text-gray-500 font-semibold">{selectedPost.author.role}</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-gray-800 leading-relaxed font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t-2 border-[#E9ECEF] flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-[#2D3436] hover:bg-black text-white font-extrabold text-xs px-6 py-3 rounded-lg uppercase tracking-wider cursor-pointer"
                >
                  CLOSE ARTICLE
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
