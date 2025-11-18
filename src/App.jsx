// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

// Components
const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">PLP Task Manager</h1>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h2>
      <p className="text-gray-700 dark:text-gray-200">{description}</p>
    </div>
  );
};

// Simulated API fetch
const fetchTasks = async () => {
  return [
    { id: 1, title: 'Learn React', description: 'Study JSX and hooks' },
    { id: 2, title: 'Build Project', description: 'Use Tailwind CSS for styling' },
    { id: 3, title: 'Deploy App', description: 'Deploy to Netlify or Vercel' },
  ];
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center text-gray-500 dark:text-gray-300">Loading tasks...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <Card key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-gray-100 text-gray-900 ${darkMode ? 'dark bg-gray-900 text-gray-100' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="flex-1 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Your Tasks</h1>
        <TaskManager />
      </main>

      <Footer />
    </div>
  );
}

export default App;

  
