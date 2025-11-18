 // src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import TaskManager from './components/TaskManager';

// Navbar Component
const Navbar = ({ darkMode, toggleDarkMode }) => (
  <header className="bg-white dark:bg-gray-800 shadow">
    <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">PLP Task Manager</h1>
      <Button variant="primary" size="md" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </p>
    </div>
  </footer>
);

// App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-100 text-gray-900 ${
        darkMode ? 'dark bg-gray-900 text-gray-100' : ''
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-1 max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Your Tasks
        </h1>
        <TaskManager />
      </main>

      <Footer />
    </div>
  );
}

export default App;
