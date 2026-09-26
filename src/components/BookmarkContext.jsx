import { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext(null);

const STORAGE_KEY = "freshfind_bookmarks";

export function BookmarkProvider({ children }) {
  const [bookmarkedMarkets, setBookmarkedMarkets] = useState([]);
  const [bookmarkedProduce, setBookmarkedProduce] = useState([]);

  // Load from localStorage once, on first mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setBookmarkedMarkets(parsed.markets || []);
      setBookmarkedProduce(parsed.produce || []);
    }
  }, []);

  // Persist every time either list changes
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ markets: bookmarkedMarkets, produce: bookmarkedProduce })
    );
  }, [bookmarkedMarkets, bookmarkedProduce]);

  const [notes, setNotes] = useState({});

useEffect(() => {
  const saved = sessionStorage.getItem("freshfind_notes");
  if (saved) setNotes(JSON.parse(saved));
}, []);

useEffect(() => {
  sessionStorage.setItem("freshfind_notes", JSON.stringify(notes));
}, [notes]);

function setNoteFor(id, text) {
  setNotes((prev) => ({ ...prev, [id]: text }));
}

  function toggleMarketBookmark(market) {
    setBookmarkedMarkets((prev) =>
      prev.some((m) => m.id === market.id)
        ? prev.filter((m) => m.id !== market.id)
        : [...prev, market]
    );
  }

  function toggleProduceBookmark(produce) {
    setBookmarkedProduce((prev) =>
      prev.some((p) => p.id === produce.id)
        ? prev.filter((p) => p.id !== produce.id)
        : [...prev, produce]
    );
  }

  function isMarketBookmarked(id) {
    return bookmarkedMarkets.some((m) => m.id === id);
  }

  function isProduceBookmarked(id) {
    return bookmarkedProduce.some((p) => p.id === id);
  }

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedMarkets,
        bookmarkedProduce,
        toggleMarketBookmark,
        toggleProduceBookmark,
        isMarketBookmarked,
        isProduceBookmarked,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error("useBookmarks must be used inside a BookmarkProvider");
  return ctx;
}