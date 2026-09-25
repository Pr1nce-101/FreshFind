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

function Home() {

    const [selectedProduce, setSelectedProduce] = useState(null);
    const navigate = useNavigate();

    const homepageProduce = [
         produceData[0],
        produceData[1],
        produceData[2],
        produceData[3]
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
    <button className='see-more-button' onClick={() => navigate('/markets')}>See more →</button>
    </div>
    <div className='market-list'>
        <div className='market-card'>
            <div className='market-image'>
                <img src={Oakridge} alt="garki market" className='market-image-content'/>
            </div>
            <div className='market-info'>
                <h1>Oakridge Farmers Market</h1>
                <p className='market-hours'>Open Saturday <li>8AM - 1PM</li></p>
                <p className='market-location'><MapPin size={18} className='location-icon'/>Downtown <li>1.2 miles away</li></p>
                <p className='market-review'><Star className='rating-icon' size={15}/> 4.9 (128 reviews)</p>
                <div className='market-tags'>
                    <p className='tag tag-organic'>Organic</p>
                    <p className='tag tag-bakery'>Bakery</p>
                    <p className='tag tag-dairy'>Dairy</p>
                </div>
            </div>
        </div>
        <div className='market-card'>
            <div className='market-image'>
                <img src={Greenvalley} alt="garki market" className='market-image-content'/>
            </div>
            <div className='market-info'>
                <h1>Green Valley Artisan Market</h1>
                <p className='market-hours'>Open Sunday <li>9AM - 2PM</li></p>
                <p className='market-location'><MapPin size={18} className='location-icon'/>Eastside <li>3.5 miles away</li></p>
                <p className='market-review'><Star className='rating-icon' size={15}/> 4.9 (95 reviews)</p>
                <div className='market-tags'>
                    <p className='tag tag-handmade'>Handmade</p>
                    <p className='tag tag-produce'>Produce</p>
                    <p className='tag tag-music'>Live Music</p>
                </div>
            </div>
        </div>
        <div className="market-card">
            <div className='market-image'>
                <img src={Riverfront} alt="garki market" className='market-image-content'/>
            </div>
            <div className='market-info'>
                <h1>Riverfront Community Market</h1>
                <p className='market-hours'>Open Wednesday <li>3PM - 7PM</li></p>
                <p className='market-location'><MapPin size={18} className='location-icon'/>Riverside <li>4.1 miles away</li></p>
                <p className='market-review'><Star className='rating-icon' size={15}/> 4.9 (210 reviews)</p>
                <div className='market-tags'>
                    <p className='tag tag-organic'>Honey</p>
                    <p className='tag tag-bakery'>Flowers</p>
                    <p className='tag tag-dairy'>Pet Friendly</p>
                </div>
            </div>
        </div>
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