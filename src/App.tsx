import { useState, useEffect } from 'react';
import Home from './pages/Home';
import SpinLoader from './components/SpinLoader';
import './index.css';
import { ChatbotProvider } from './components/chatbot/chatbot-provider';

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
        <ChatbotProvider>
          <Home />
        </ChatbotProvider>
      )}
    </div>
  );
}

export default App;
