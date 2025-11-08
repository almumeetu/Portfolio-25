import React from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center">{children}</h2>
);

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="group bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700/50 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
        <div className="overflow-hidden h-48">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{post.title}</h3>
            <p className="text-gray-300">{post.excerpt}</p>
        </div>
    </div>
);

// Note: This file is repurposed as the Blog tab content.
const Blog: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle>My Thoughts & Writings</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;