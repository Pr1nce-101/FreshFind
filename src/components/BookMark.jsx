import ProduceCard from './ProduceCard';
import MarketCard from './MarketCard';
import './ProduceMarketBookmark_css/cards.css';

export default function BookMark({
  bookmarkedProduce = [],
  bookmarkedMarkets = [],
  onToggleProduceBookmark,
  onToggleMarketBookmark,
}) {
  const isEmpty = bookmarkedProduce.length === 0 && bookmarkedMarkets.length === 0;

  return (
    <section className="bm-wrap">
      <h2 className="bm-heading">Bookmarks</h2>

      {isEmpty && (
        <p className="bm-empty">You haven't bookmarked any produce or markets yet.</p>
      )}

      {bookmarkedProduce.length > 0 && (
        <div className="bm-group">
          <h3 className="bm-group-heading">Produce</h3>
          <div className="bm-grid">
            {bookmarkedProduce.map((produce) => (
              <ProduceCard
                key={produce.id}
                produce={produce}
                isBookmarked
                onToggleBookmark={onToggleProduceBookmark}
              />
            ))}
          </div>
        </div>
      )}

      {bookmarkedMarkets.length > 0 && (
        <div className="bm-group">
          <h3 className="bm-group-heading">Markets</h3>
          <div className="bm-grid">
            {bookmarkedMarkets.map((market) => (
              <MarketCard
                key={market.id}
                market={market}
                isBookmarked
                onToggleBookmark={onToggleMarketBookmark}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}