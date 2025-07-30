// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import like from '../assets/like.png';
import love from '../assets/love.png';
import angry from '../assets/angry.png';
import sad from '../assets/sad.png';

const Home = () => {
  const [selectedReaction, setSelectedReaction] = useState('');
  const [reactionsCount, setReactionsCount] = useState({ Like: 0, Love: 0, Angry: 0, Sad: 0 });
  const [comments, setComments] = useState([
    { id: 1, name: 'User A', text: 'Great thoughts!', replies: [], likes: 0, dislikes: 0 },
    { id: 2, name: 'User B', text: 'Well written!', replies: [], likes: 0, dislikes: 0 },
    { id: 3, name: 'User C', text: 'Needs more detail.', replies: [], likes: 0, dislikes: 0 }
  ]);
  const [newComment, setNewComment] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 2;
  const navigate = useNavigate();

  const handleReaction = (type) => {
    setSelectedReaction(type);
    setReactionsCount({ ...reactionsCount, [type]: reactionsCount[type] + 1 });
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newId = comments.length + 1;
      setComments([
        ...comments,
        { id: newId, name: 'Anonymous', text: newComment, replies: [], likes: 0, dislikes: 0 }
      ]);
      setNewComment('');
    }
  };

  const handleLikeDislike = (commentId, type) => {
    setComments(comments.map(comment =>
      comment.id === commentId ? { ...comment, [type]: comment[type] + 1 } : comment
    ));
  };

  const handleReply = (commentId, replyText) => {
    if (replyText.trim()) {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, { text: replyText }] }
          : comment
      ));
    }
  };

  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container mt-4">
      <h2>
        <span onClick={() => navigate('/profile')} style={{ cursor: 'pointer', color: 'blue' }}>
          Shadman Muhtasim
        </span>'s Article
      </h2>
      <p className="lead">
        Education is the key to unlocking the golden door of freedom. Every student should focus on holistic development.
        The journey of learning is endless, and determination paves the path to success. Stay curious, stay humble.
      </p>

      <div className="d-flex justify-content-around my-4">
        {Object.entries({ Like: like, Love: love, Angry: angry, Sad: sad }).map(([name, icon]) => (
          <div key={name} onClick={() => handleReaction(name)} style={{ cursor: 'pointer' }}>
            <img src={icon} alt={name} width="40" style={{ opacity: selectedReaction === name ? 1 : 0.4 }} />
            <p className="text-center">{name} ({reactionsCount[name]})</p>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="2"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="btn btn-primary mt-2" onClick={handleCommentSubmit}>Post</button>
      </div>

      {currentComments.map(comment => (
        <div key={comment.id} className="card mb-3">
          <div className="card-body">
            <h6>{comment.name}</h6>
            <p>{comment.text}</p>
            <button onClick={() => handleLikeDislike(comment.id, 'likes')} className="btn btn-outline-success btn-sm me-2">
              👍 {comment.likes}
            </button>
            <button onClick={() => handleLikeDislike(comment.id, 'dislikes')} className="btn btn-outline-danger btn-sm me-2">
              👎 {comment.dislikes}
            </button>

            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Reply..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleReply(comment.id, e.target.value);
                }}
              />
              {comment.replies.map((reply, i) => (
                <p key={i} className="ms-3 mt-2 border-start ps-2">↪ {reply.text}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(comments.length / commentsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            className={`btn btn-sm ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-secondary'} mx-1`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
