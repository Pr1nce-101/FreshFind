import { useState } from 'react';
import './ProduceMarketBookmark_css/cards.css';

/**
 * ProduceCard: Reusable card for a single produce item. Rendered in bulk by the ProduceGuide page 
 * and reused inside BookMark.jsx for bookmarked produce.
 *
 * Properties:
 *  - produce (object, required):
 *      {
 *        id, name, category, image,
 * 
 *        seasonBadge: e.g "In Season Now" (this is optional)
 * 
 *        briefDescription: shown on the front of the card
 * 
 *        fullDescription: shown in "Produce Details" section, falls back to briefDescription
 * 
 *        peakSeasonRange: e.g. "May - Jul" - optional
 * 
 *        nutritionalFacts: [{ label, value }]
 * 
 *        inStock (boolean): set/updated in the data layer, not in this component
 * 
 *        linkedMarkets: [{ id, name, url }]
 *      }
 * 
 *  - isBookmarked (boolean): whether this produce is currently bookmarked
 * 
 *  - onToggleBookmark (fn(produce)): called when the bookmark button is clicked
 * 
 *  - onVisitMarket (fn(marketId, market)): called when "Visit Market Page" is
 *      clicked. using react-router's `navigate`, example: add (navigate(`/markets/${id}`)) 
 *      to your router on the visit market page once ProduceCard is called inside the ProduceGuide page. 
 *      If it is not provided, the button falls back to a plain link using market.url.
 * 
 * note: fn means function
 */
export default function ProduceCard({
  produce,
  isBookmarked = false,
  onToggleBookmark,
  onVisitMarket,
}) {
  const [expanded, setExpanded] = useState(false);

  if (!produce) return null;

  const {
    name,
    category,
    image,
    seasonBadge,
    briefDescription,
    fullDescription,
    peakSeasonRange,
    nutritionalFacts = [],
    inStock,
    linkedMarkets = [],
  } = produce;

  return (
    <>
      {/* Card front: image + brief details */}
      <article className="pc-card">
        <div className="pc-image-wrap">
          <img src={image} alt={name} className="pc-image" />
          {seasonBadge && <span className="pc-badge">{seasonBadge}</span>}
        </div>
        <div className="pc-body">
          <h3 className="pc-name">{name}</h3>
          {category && <span className="pc-category">{category}</span>}
          <p className="pc-brief">{briefDescription}</p>
          <button
            type="button"
            className="pc-btn-outline"
            onClick={() => setExpanded(true)}
          >
            View Full Details
          </button>
        </div>
      </article>

      {/* Expanded full detail view */}
      {expanded && (
        <div
          className="pc-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} details`}
          onClick={(e) => e.target === e.currentTarget && setExpanded(false)}
        >
          <div className="pc-modal">
            <button
              type="button"
              className="pc-close"
              onClick={() => setExpanded(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="pc-modal-image-wrap">
              <img src={image} alt={name} className="pc-modal-image" />
              {seasonBadge && <span className="pc-badge">{seasonBadge}</span>}
              <button
                type="button"
                className={`pc-bookmark-btn ${isBookmarked ? 'is-active' : ''}`}
                onClick={() => onToggleBookmark && onToggleBookmark(produce)}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                aria-pressed={isBookmarked}
              >
                {isBookmarked ? '★' : '☆'}
              </button>
            </div>

            <div className="pc-modal-body">
              <h2 className="pc-modal-name">{name}</h2>
              {category && <span className="pc-category">{category}</span>}

              <section className="pc-section">
                <h4>Produce Details</h4>
                <p>{fullDescription || briefDescription}</p>
              </section>

              <section className="pc-section">
                <h4>Nutritional Facts</h4>
                {nutritionalFacts.length ? (
                  <ul className="pc-facts-list">
                    {nutritionalFacts.map((fact, i) => (
                      <li key={i}>
                        <span>{fact.label}</span>
                        <span>{fact.value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="pc-muted">No nutritional data available.</p>
                )}
              </section>

              <section className="pc-section">
                <h4>Stock</h4>
                <span className={`pc-stock-pill ${inStock ? 'in' : 'out'}`}>
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                {peakSeasonRange && (
                  <p className="pc-muted" style={{ marginTop: 8 }}>
                    Peak season: {peakSeasonRange}
                  </p>
                )}
              </section>

              <section className="pc-section">
                <h4>Available at Linked Markets</h4>
                {linkedMarkets.length ? (
                  <ul className="pc-market-list">
                    {linkedMarkets.map((market) => (
                      <li key={market.id} className="pc-market-item">
                        <span>{market.name}</span>
                        {onVisitMarket ? (
                          <button
                            type="button"
                            className="pc-btn-primary"
                            onClick={() => onVisitMarket(market.id, market)}
                          >
                            Visit Market Page
                          </button>
                        ) : (
                          <a className="pc-btn-primary" href={market.url || '#'}>
                            Visit Market Page
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="pc-muted">Not currently linked to any markets.</p>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}