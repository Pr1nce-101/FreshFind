import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProduceCard from '../components/ProduceCard';
import { produceData } from '../data/produceData';

export default function ProduceGuide() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const navigate = useNavigate();

  const categories = ['All', 'Vegetables', 'Fruits', 'Herbs', 'Pantry'];

  // Filter items by category
  const filteredProduce = selectedCategory === 'All'
    ? produceData
    : produceData.filter(item => item.category === selectedCategory);

  // Toggle bookmark function
  const handleToggleBookmark = (produceItem) => {
    setBookmarkedIds((prev) =>
      prev.includes(produceItem.id)
        ? prev.filter((id) => id !== produceItem.id)
        : [...prev, produceItem.id]
    );
  };

  // Handle clicking "Visit Market Page"
  const handleVisitMarket = (marketId) => {
    navigate(`/markets/${marketId}`);
  };

  return (
    <main className="produce-guide-page" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ color: '#0d2310', fontSize: '2.5rem', marginBottom: '8px' }}>Seasonal Produce Guide</h1>
        <p style={{ color: '#4a5568' }}>Discover fresh produce available across local markets in your region.</p>
      </header>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              backgroundColor: selectedCategory === cat ? '#0d2310' : '#E2E8F0',
              color: selectedCategory === cat ? '#FFBF00' : '#2D3748',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Produce Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {filteredProduce.map((item) => (
          <ProduceCard
            key={item.id}
            produce={item}
            isBookmarked={bookmarkedIds.includes(item.id)}
            onToggleBookmark={handleToggleBookmark}
            onVisitMarket={handleVisitMarket}
          />
        ))}
      </div>
    </main>
  );
}