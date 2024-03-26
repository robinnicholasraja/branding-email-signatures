import React from "react";

const Loading = () => {
  return (
    <div className="h-screen bg-slate-900/10 grid place-items-center">
      <svg className="spinner" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loading;
