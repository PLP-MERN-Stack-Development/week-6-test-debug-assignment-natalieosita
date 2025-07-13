import React, { useEffect, useState } from 'react';
import BugItem from './BugItem';
import { fetchBugs, updateBugStatus, deleteBug } from '../api/bugService';

const BugList = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBugs().then(data => {
      setBugs(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : bugs.length === 0 ? (
    <p>No bugs found</p>
  ) : (
    bugs.map(bug => (
      <BugItem
        key={bug._id}
        bug={bug}
        onUpdate={updateBugStatus}
        onDelete={id => {
          deleteBug(id);
          setBugs(prev => prev.filter(b => b._id !== id));
        }}
      />
    ))
  );
};

export default BugList;