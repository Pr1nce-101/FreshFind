import BookMark from "../components/BookMark";
import { useBookmarks } from "../components/BookmarkContext";

export default function BookMarks() {
  const {
    bookmarkedMarkets,
    bookmarkedProduce,
    toggleMarketBookmark,
    toggleProduceBookmark,
    notes,
    setNoteFor,
  } = useBookmarks();

  return (
    <BookMark
      bookmarkedMarkets={bookmarkedMarkets}
      bookmarkedProduce={bookmarkedProduce}
      onToggleMarketBookmark={toggleMarketBookmark}
      onToggleProduceBookmark={toggleProduceBookmark}
      notes={notes}
      onNoteChange={setNoteFor}
    />
  );
}