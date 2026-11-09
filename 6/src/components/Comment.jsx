import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
  const { author, comment } = useSelector((state) => {
    const currentComment = state.commentsReducer.entities[commentId];

    if (!currentComment) {
      return { author: undefined, comment: undefined };
    }

    const currentAuthor = state.usersReducer.entities[currentComment.author];

    return {
      author: currentAuthor,
      comment: currentComment,
    };
  });
  // END

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;
