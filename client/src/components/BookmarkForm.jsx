import { useState } from 'react';

function BookmarkForm({ onAdd }) {
  // Local state for each input field
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tag, setTag] = useState('general');

  const handleSubmit = (e) => {
    // Prevent the browser from refreshing the page
    e.preventDefault();
    if (!title || !url) return;
    // Pass the new bookmark data up to the parent
    onAdd({ title, url, tag });
    // Clear the form fields after submission
    setTitle('');
    setUrl('');
    setTag('general');
  };

  return (
    <form onSubmit={handleSubmit} className="bookmark-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tag (e.g. work, learning)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
}

export default BookmarkForm;