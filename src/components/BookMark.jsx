import { useState } from 'react';
import ProduceCard from './ProduceCard';
import MarketCard from './MarketCard';
import "../styles/cards.css"

/**
 * BookMark: Displays everything the user has bookmarked, both produce and markets by reusing ProduceCard 
 * and MarketCard directly, so each bookmarked item still opens its own full detail view through the
 * View Full Details/ View Market Details buttons.
 *
 * Properties:
 *  - bookmarkedProduce (array): produce objects, same shape ProduceCard expects
 * 
 *  - bookmarkedMarkets (array): market objects, same shape MarketCard expects
 * 
 *  - onToggleProduceBookmark (fn(produce)): passed through to each ProduceCard
 * 
 *  - onToggleMarketBookmark (fn(market)): passed through to each MarketCard
 * 
 *  - notes (object): { [itemId]: noteText } — session-only personal notes
 * 
 *  - onNoteChange (fn(itemId, text)): called when a note textarea changes
 * 
 * note: fn means function
 */
export default function BookMark({
  bookmarkedProduce = [],
  bookmarkedMarkets = [],
  onToggleProduceBookmark,
  onToggleMarketBookmark,
  notes = {},
  onNoteChange,
}) {
  const isEmpty = bookmarkedProduce.length === 0 && bookmarkedMarkets.length === 0;
  const [copied, setCopied] = useState(false);

  function exportBookmarks() {
    const lines = [
      ...bookmarkedMarkets.map((m) => {
        const note = notes[m.id];
        return `Market: ${m.name} (${m.location})${note ? ` — Note: ${note}` : ""}`;
      }),
      ...bookmarkedProduce.map((p) => {
        const note = notes[p.id];
        return `Produce: ${p.name}${note ? ` — Note: ${note}` : ""}`;
      }),
    ];

    const text = lines.join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareItem(name) {
    const text = `Check out ${name} on FreshFind!`;
    if (navigator.share) {
      navigator.share({ title: name, text });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  }

  return (
    <section className="bm-wrap">
      <div className="bm-header">
        <h2 className="bm-heading">Bookmarks</h2>
        {!isEmpty && (
          <button type="button" className="bm-export-btn" onClick={exportBookmarks}>
            {copied ? "Copied!" : "Export List"}
          </button>
        )}
      </div>

      {isEmpty && (
        <p className="bm-empty">You haven't bookmarked any produce or markets yet.</p>
      )}

      {bookmarkedProduce.length > 0 && (
        <div className="bm-group">
          <h3 className="bm-group-heading">Produce</h3>
          <div className="bm-grid">
            {bookmarkedProduce.map((produce) => (
              <div key={produce.id} className="bm-item">
                <ProduceCard
                  produce={produce}
                  isBookmarked
                  onToggleBookmark={onToggleProduceBookmark}
                />
                <textarea
                  className="bm-note"
                  placeholder="Add a note (this session only)..."
                  value={notes[produce.id] || ""}
                  onChange={(e) => onNoteChange && onNoteChange(produce.id, e.target.value)}
                />
                <button
                  type="button"
                  className="bm-share-btn"
                  onClick={() => shareItem(produce.name)}
                >
                  Share
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {bookmarkedMarkets.length > 0 && (
        <div className="bm-group">
          <h3 className="bm-group-heading">Markets</h3>
          <div className="bm-grid">
            {bookmarkedMarkets.map((market) => (
              <div key={market.id} className="bm-item">
                <MarketCard
                  market={market}
                  isBookmarked
                  onToggleBookmark={onToggleMarketBookmark}
                />
                <textarea
                  className="bm-note"
                  placeholder="Add a note (this session only)..."
                  value={notes[market.id] || ""}
                  onChange={(e) => onNoteChange && onNoteChange(market.id, e.target.value)}
                />
                <button
                  type="button"
                  className="bm-share-btn"
                  onClick={() => shareItem(market.name)}
                >
                  Share
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}