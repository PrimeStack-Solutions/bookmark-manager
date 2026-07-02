function BookmarkList({ bookmarks, onDelete }) {
  // Show a friendly message if no bookmarks exist yet
  if (bookmarks.length === 0) {
    return <p className="empty-message">No bookmarks yet. Add one above!</p>;
  }

  return (
    <ul className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <li key={bookmark._id} className="bookmark-item">
          <div className="bookmark-info">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title}
            </a>
            <span className="bookmark-tag">{bookmark.tag}</span>
          </div>
          <button onClick={() => onDelete(bookmark._id)} className="delete-btn">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BookmarkList;
