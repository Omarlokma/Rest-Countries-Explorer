import { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button className="toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}

export default Header;
