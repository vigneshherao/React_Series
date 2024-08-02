import React from 'react';

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-icon">😞</div>
      <h1 className="error-title">Oops! Something went wrong.</h1>
      <p className="error-message">We couldn't find the page you're looking for.</p>
    </div>
  );
};

export default Error;
