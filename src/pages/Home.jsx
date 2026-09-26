import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import heropic from '../images/hero-background.jpeg';
import Oakridge from '../images/Oakridge.jpeg';
import Greenvalley from '../images/Green-valley-artisan.jpeg';
import Riverfront from '../images/Riverfront.jpeg';
import tomato from '../images/tomato.png';
import spinach from '../images/baby-spinach.png';
import carrots from '../images/heritage-carrots.png';
import apples from '../images/crisp-apples.png';
import { produceData } from '../data/produceData';
import markets from '../data/markets.json';

function Home() {

    const [selectedProduce, setSelectedProduce] = useState(null);
    const [marketIndex, setMarketIndex] = useState(0);
    const navigate = useNavigate();

    const homepageProduce = [
         produceData[0],
        produceData[1],
        produceData[2],
        produceData[3]
    ];

    const homepageMarkets = [
    markets.find(market => market.id === 'm21'), 
    markets.find(market => market.id === 'm16'),
    markets.find(market => market.id === 'm2'),
    markets.find(market => market.id === 'm5'),
    markets.find(market => market.id === 'm14'),
    markets.find(market => market.id === 'm7'),
    markets.find(market => market.id === 'm1'),  
    ];

  return (
    <>
    <div className="hero">
      <img src={heropic} alt="Fresh produce at a local market" />
      
      <div className="hero-content">
        <h1>Fresh All Along - Discover Your Local Farmers Markets</h1>
        <p>Fresh organic farm produce, seasonal fruits, and local vendors near you.</p>
        
        <div className="market-search">
          <div className="search-option">
            <select defaultValue="">
              <option value="" disabled>Select Area</option>
              <option value="apo">Apo</option>
              <option value="dutse">Dutse</option>
              <option value="garki">Garki</option>
              <option value="gwarinpa">Gwarinpa</option>
              <option value="">Kado</option>
              <option value="lifecamp">Lifecamp</option>
              <option value="lugbe">Lugbe</option>
              <option value="wuse">Wuse</option>
            </select>
          </div>

          <div className="search-option">
            <select defaultValue="">
              <option value="" disabled>Day of Week</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </div>

          <div className="search-option">
            <select defaultValue="">
              <option value="" disabled>Produce Type</option>
            </select>
          </div>

          <button className="search-button">Search Markets</button>
        </div>
      </div>
    </div>

    <div className='section-header'>
    <h1 className='section-title'>Fresh This Week - Seasonal Produce Guide</h1>
    <div className='move-buttons'>
        <button className='left-btn' onClick={() => {
        if (marketIndex > 0) {
            setMarketIndex(marketIndex - 1);
        }
        }}>&lt;</button>
        <button className='right-btn' onClick={() => {
        if (marketIndex < homepageMarkets.length - 3) {
            setMarketIndex(marketIndex + 1);
        }
        }}>&gt;</button>
    </div>
    </div>
    <div className='market-list'>
    {homepageMarkets.slice(marketIndex, marketIndex + 3).map((market) => (
        <div className='market-card' key={market.id}>
            <div className='market-image'>
                <img
                    src={market.image}
                    alt={market.name}
                    className='market-image-content'
                />
            </div>

            <div className='market-info'>
                <h1 className='market-title'>{market.name}</h1>

                <p className='market-hours'>
                     Open {market.hours[0].day} · {market.hours[0].open} - {market.hours[0].close}
                </p>

                <p className='market-location'>
                    <MapPin size={18} className='location-icon' />
                    {market.location}
                </p>

                <div className='market-tags'>
                    {market.categories.slice(0, 3).map((category) => (
                        <p className='tag tag-organic' key={category}>
                            {category}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    ))}
    </div>

    <div className='section-header'>
    <h1 className='section-title'>Fresh This Week - Seasonal Produce Guide</h1>

    <button className='see-more-button' onClick={() => navigate('/produce')}>See more →</button>
    </div>
    <div className='produce-list'>
  {homepageProduce.map((produce) => (
    <div
      className='produce-card'
      key={produce.id}
      onClick={() => setSelectedProduce(produce)}
    >
      <div className='produce-image'>
        <span className='season-tag'>
          {produce.seasonBadge || 'PEAK SEASON'}
        </span>
        <img
          src={produce.image}
          alt={produce.name}
          className='produce-image-content'
        />
      </div>

      <div className='produce-info'>
        <h2 className='produce-title'>{produce.name}</h2>
        <p className='produce-category'>{produce.category || 'VEGETABLES'}</p>
        <p className='produce-desc'>{produce.briefDescription}</p>
        
        <button 
          className='btn-view-details'
          onClick={(e) => {
            e.stopPropagation();
            setSelectedProduce(produce);
          }}
        >
          View Full Details
        </button>
      </div>
    </div>
  ))}
</div>

    {selectedProduce && (
    <div
        className="produce-popup-overlay"
        onClick={(e) => {
            if (e.target === e.currentTarget) {
                setSelectedProduce(null);
            }
        }}
    >
        <div className="produce-popup">

            <img
                src={selectedProduce.image}
                alt={selectedProduce.name}
                className="produce-popup-image"
            />

            <div className="produce-popup-info">
                <p className="season-tag">
                    {selectedProduce.seasonBadge}
                </p>

                <h2>{selectedProduce.name}</h2>

                <p className="produce-popup-category">
                    {selectedProduce.category}
                </p>

                <p>
                    {selectedProduce.fullDescription ||
                     selectedProduce.briefDescription}
                </p>

                <p>
                    <strong>Peak Season:</strong>{' '}
                    {selectedProduce.peakSeasonRange}
                </p>

                <p>
                    <strong>Status:</strong>{' '}
                    {selectedProduce.inStock
                        ? 'In Stock'
                        : 'Out of Stock'}
                </p>
            </div>

        </div>
    </div>
    )}
    </>
  );
}

export default Home;