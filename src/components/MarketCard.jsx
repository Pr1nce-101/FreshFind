import { useState } from 'react';
import { isMarketOpenNow } from "../utils/isOpen";
import './ProduceMarketBookmark_css/cards.css';

// All possible produce categories a market can display icons for.
// Pass these subset in market categories.
const CATEGORY_ICONS = {
  organic: '🌱',
  fruits: '🍎',
  vegetables: '🥬',
  processed: '🥫',
  herbs: '🌶️',
  fish: '🐟',
  grains: '🌾',
  meat: '🥩',
};

/**
 * MarketCard: Reusable card for a single market. Rendered in bulk by the MarketDirectory page and reused inside
 * BookMark.jsx for bookmarked markets.
 *
 * Properties:
 *  - market (object, required):
 *      {
 *        id, name, image, location,
 * 
 *        openNow (boolean): optional "Open Now" badge
 * 
 *        operating hours: [{ day, open hour, close hour }]
 * 
 *        categories: subset of: organic, fruits, vegetables,
 *                    livestock, birds, fish, dairy, flowers
 * 
 *        vendors: [{ id, name, description }]
 * 
 *        currentProduce: [{ id, name, image, inStock }]. Display only;
 * 
 *                         - adding/removing produce and toggling stock
 *                         status is handled in the data layer, not in this component
 *      }
 * 
 *  - isBookmarked (boolean): whether this market is currently bookmarked
 * 
 *  - onToggleBookmark (fn(market)): This is called when the bookmark button is clicked
 * 
 */
export default function MarketCard({ market, isBookmarked = false, onToggleBookmark }) {
  const [expanded, setExpanded] = useState(false);

  if (!market) return null;

  const {
    name,
    image,
    location,
    hours = [],
    categories = [],
    vendors = [],
    currentProduce = [],
  } = market;

const openNow = isMarketOpenNow(hours);
console.log(name, hours, openNow);
  

  return (
    <>
      {/* Card fronta */}
      <article className="mc-card">
        <div className="mc-image-wrap">
          <img src={image} alt={name} className="mc-image" />
          <span className={`mc-badge ${openNow ? 'open' : 'closed'}`}>
            {openNow ? 'Open Now' : 'Closed'}
          </span>
        </div>
        <div className="mc-body">
          <h3 className="mc-name">{name}</h3>
          <p className="mc-location">{location}</p>

          {hours.length > 0 && (
            <div className="mc-hours">
              {hours.map((h, i) => (
                <span key={i} className="mc-hours-item">
                  {h.day}: {h.open}–{h.close}
                </span>
              ))}
            </div>
          )}

          {categories.length > 0 && (
            <div className="mc-icons">
              {categories.map((c) => (
                <span key={c} className="mc-icon" title={c}>
                  {CATEGORY_ICONS[c] || '•'}
                </span>
              ))}
            </div>
          )}

          <button
            type="button"
            className="mc-btn-outline"
            onClick={() => setExpanded(true)}
          >
            View Market Details
          </button>
        </div>
      </article>

      {/* Expanded full market details */}
      {expanded && (
        <div 
          className="mc-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} details`}
          onClick={(e) => e.target === e.currentTarget && setExpanded(false)}>
          <div className="mc-modal">
            <button
              type="button"
              className="mc-close"
              onClick={() => setExpanded(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="mc-modal-image-wrap">
              <img src={image} alt={name} className="mc-modal-image" />
              <button
                type="button"
                className={`mc-bookmark-btn ${isBookmarked ? 'is-active' : ''}`}
                onClick={() => onToggleBookmark && onToggleBookmark(market)}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                aria-pressed={isBookmarked}
              >
                {isBookmarked ? '★' : '☆'}
              </button>
            </div>

            <div className="mc-modal-body">
                <h2 className="mc-modal-name">{name}</h2>
                <p className="mc-location">{location}</p>

                <section className="mc-section">
                  <h4>Location</h4>
                  <div className="mc-map-wrap">
                    <iframe
                      title={`${name} location`}
                      className="mc-map"
                      loading="lazy"
                      src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                    ></iframe>
                  </div>
                </section>

              <section className="mc-section">
                <h4>Operating Hours</h4>
                {hours.length ? (
                  <ul className="mc-hours-list">
                    {hours.map((h, i) => (
                      <li key={i}>
                        <span>{h.day}</span>
                        <span>{h.open} – {h.close}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mc-muted">Hours not available.</p>
                )}
              </section>

              <section className="mc-section">
                <h4>Vendors</h4>
                {vendors.length ? (
                  <ul className="mc-vendor-list">
                    {vendors.map((v) => (
                      <li key={v.id} className="mc-vendor-item">
                        <span className="mc-vendor-name">{v.name}</span>
                        {v.description && (
                          <span className="mc-vendor-desc">{v.description}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mc-muted">No vendors listed.</p>
                )}
              </section>

              <section className="mc-section">
                <h4>Current Produce</h4>
                {currentProduce.length ? (
                  <ul className="mc-produce-list">
                    {currentProduce.map((p) => (
                      <li key={p.id} className="mc-produce-item">
                        <span className="mc-produce-info">
                          {p.image && (
                            <img src={p.image} alt={p.name} className="mc-produce-thumb" />
                          )}
                          <span>{p.name}</span>
                        </span>
                        <span className={`mc-stock-pill ${p.inStock ? 'in' : 'out'}`}>
                          {p.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mc-muted">No produce listed yet.</p>
                )}
              </section>
            </div>
          </div>
        </div>
        
      )}
    </>
  );
}