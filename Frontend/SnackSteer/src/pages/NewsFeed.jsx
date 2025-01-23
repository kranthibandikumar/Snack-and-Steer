import React, { useState } from 'react';
import { Send } from 'lucide-react';
import '../styles/NewsFeed.css';

export function NewsFeed({ user }) {
  const [thought, setThought] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (!thought.trim()) return;

    const newPost = {
      id: Date.now().toString(),
      content: thought,
      author: user.name,
      timestamp: new Date(),
    };

    setPosts([newPost, ...posts]);
    setThought('');
  };

  return (
    <div className="newsfeed">
      <div className="post-form">
        <h2>Share Your Thoughts</h2>
        <div className="form-content">
          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button onClick={handlePost} className="post-button">
            <Send className="send-icon" />
            <span>Post</span>
          </button>
        </div>
      </div>

      <div className="posts-section">
        <h2>Recent Thoughts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <span className="author">{post.author}</span>
              <span className="timestamp">
                {new Date(post.timestamp).toLocaleDateString()}
              </span>
            </div>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
        {posts.length === 0 && (
          <p className="no-posts">No thoughts shared yet. Be the first!</p>
        )}
      </div>
    </div>
  );
}