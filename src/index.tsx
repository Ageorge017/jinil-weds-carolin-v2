// IMPORTS
// =============================================
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div className="m-8 p-8 bg-white rounded">
    <h1 className="text-2xl text-gray-600">Hello, now what?</h1>
    <p className="text-gray-400 flex">
      Running on port: {window.location.port || 80}
    </p>
  </div>,
  document.getElementById('root'),
);
