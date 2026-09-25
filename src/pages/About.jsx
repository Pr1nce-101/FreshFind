import "../styles/About.css";
export default function About() {
  return (
    <div className="about-page">
      <main className="about-main">
        <h1>
          Connecting Communities
          <br />
          with Fresh, Local Food
        </h1>

        <p className="intro">
          FreshFind was built to bridge the gap between local sustainable farms
          and urban neighborhood markets.
        </p>

        <section className="cards">
          <article className="card">
            <div className="card-icon">🌿</div>
            <h2>Support Local Farmers</h2>
            <p>
              We help local farmers sell their food at nearby markets so
              communities can eat fresh and farmers can grow their business.
            </p>
          </article>

          <article className="card">
            <div className="card-icon">🍎</div>
            <h2>Eat In Season</h2>
            <p>
              Seasonal food tastes better and is better for the planet.
              FreshFind makes it easy to find what is growing right now.
            </p>
          </article>

          <article className="card">
            <div className="card-icon">📍</div>
            <h2>Transparent Sourcing</h2>
            <p>
              See where your food comes from. We connect shoppers to the farms
              and markets in their own neighborhood.
            </p>
          </article>
        </section>

        <section className="stats">
          <div>
            <h3>50+</h3>
            <p>Partner Markets</p>
          </div>
          <div>
            <h3>120+</h3>
            <p>Local Vendors</p>
          </div>
          <div>
            <h3>10k+</h3>
            <p>Community Visitors</p>
          </div>
        </section>
      </main>
    </div>
  );
}
