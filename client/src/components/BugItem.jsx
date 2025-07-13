import React from 'react';

const BugItem = ({ bug, onUpdate, onDelete }) => (
  <div data-testid="bug-item">
    <h4>{bug.title}</h4>
    <p>{bug.description}</p>
    <select value={bug.status} onChange={e => onUpdate(bug._id, e.target.value)}>
      <option value="open">Open</option>
      <option value="in-progress">In Progress</option>
      <option value="resolved">Resolved</option>
    </select>
    <button onClick={() => onDelete(bug._id)}>Delete</button>
  </div>
);

export default BugItem;