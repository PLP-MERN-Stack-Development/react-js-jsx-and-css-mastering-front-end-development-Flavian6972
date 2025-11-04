import React, { useState } from 'react';
import './App.css';

// Import your components here
import Button from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiDataPage from "./pages/ApiDataPage";

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    // Wrap everything INSIDE ThemeProvider so it can manage dark/light mode globally
    <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        {/* Navbar Section */}
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">PLP Task Manager</h1>
          </div>
        </header>

        {/* Navbar component */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Counter + TaskManager section */}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">

              <TaskManager />

            </div>
          </div>

          {/* API section */}
          <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <ApiDataPage />
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      
    </ThemeProvider>
  );
}

export default App;