import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-sky-300 flex items-center justify-center">
      <span className="loading loading-bars loading-lg text-white"></span>
    </div>
  );
};

export default Loading;