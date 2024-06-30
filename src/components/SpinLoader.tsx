import React from "react";

const SpinLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-black bg-white">
      <div className="flex justify-center">
        <div className="h-16 w-16 animate-bounce rounded-full dark:bg-white bg-black"></div>
      </div>
    </div>
  );
};

export default SpinLoader;
