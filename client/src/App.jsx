import { useState, useEffect } from "react";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";
import "./App.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from backend when component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/bookmarks")
      .then(res => res.json())
      .then(data => setBookmarks(data))
      .catch(err => console.error("Error fetching bookmarks:", err));
  }, []);

  // Function to add a new bookmark
  const addBookmark = async (bookmark) => {
    try {
      const res = await fetch("http://localhost:5000/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookmark),
      });
      const newBookmark = await res.json();
      setBookmarks([...bookmarks, newBookmark]); // update state with new bookmark
    } catch (err) {
      console.error("Error adding bookmark:", err);
    }
  };
  // Function to delete a bookmark
const deleteBookmark = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/bookmarks/${id}`, {
      method: "DELETE",
    });
    setBookmarks(bookmarks.filter((b) => b._id !== id));
  } catch (err) {
    console.error("Error deleting bookmark:", err);
  }
};

return (
  <div className="App">
    <h1>Bookmark Manager</h1>
    <BookmarkForm onAdd={addBookmark} />
    <BookmarkList bookmarks={bookmarks} onDelete={deleteBookmark} /> {/* ⬅️ Pass delete here */}
  </div>
);


  return (
    <div className="App">
      <h1>Bookmark Manager</h1>
      <BookmarkForm onAdd={addBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default App;
