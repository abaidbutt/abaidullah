import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import SpinLoader from './components/SpinLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to showcase loading spinner
    setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (simulating data fetching, etc.)
    }, 2000); // Adjust the delay time as per your requirement
  }, []);

  return (
    <div>
      {loading ? (
        <SpinLoader />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
