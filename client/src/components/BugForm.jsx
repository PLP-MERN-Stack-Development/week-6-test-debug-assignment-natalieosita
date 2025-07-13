import React, { useState } from 'react';

const BugForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.title && form.description) {
      onSubmit(form);
      setForm({ title: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Bug Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Bug Description" value={form.description} onChange={handleChange} required />
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm;