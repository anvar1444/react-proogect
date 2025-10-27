import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Hearder';
import Center from './Center';
import Footer from './Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to body when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-theme' : ''}`}>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        <Routes>
          <Route path="/" element={<Center />} />
          {/* Add more routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
