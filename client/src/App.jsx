import React, { useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import { createBug } from './api/bugService';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);

  const handleNewBug = async bug => {
    await createBug(bug);
    setRefreshToggle(prev => !prev); // Trigger refresh in BugList
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <h1>🐞 Bug Tracker</h1>
        <BugForm onSubmit={handleNewBug} />
        <BugList key={refreshToggle} />
      </div>
    </ErrorBoundary>
  );
};

export default App;