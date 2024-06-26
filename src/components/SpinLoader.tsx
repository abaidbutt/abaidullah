import React from "react";

const SpinLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex justify-center">
        <div className="h-16 w-16 animate-bounce rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default SpinLoader;
