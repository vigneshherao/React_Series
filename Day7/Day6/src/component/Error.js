import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {

    const err = useRouteError();
    console.log(err);


  return (
    <div className="error-container">
      <div className="error-icon">😞</div>
      <h1 className="error-title">Oops! Something went wrong.</h1>
      <p className="error-message">{err?.error?.message}</p>
    </div>
  );
};

export default Error;
