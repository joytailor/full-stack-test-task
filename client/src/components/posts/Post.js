import React from 'react';
import './Post.scss';

const Post = ({ author, title, description, date }) => (
  <article className="Post">
    <header className="Post__header">
      <h2 className="Post__header--author">{author}</h2>
      <h3 className="Post__header--date">{date}</h3>
    </header>
    <h1 className="Post__title">{title}</h1>
    <p className="Post__description">{description}</p>
  </article> 
);

export default Post;
