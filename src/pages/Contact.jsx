import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="contact-page">
      <main className="content">
        <h1>Get in Touch with FreshFind</h1>
        <p className="subtitle">
          Have questions about a market or want to list your local farm
          <br />
          on our platform?
        </p>

        <div className="layout">
          <form className="form-card">
            <label>
              Full Name
              <input type="text" placeholder="[Your Full Name]" />
            </label>

            <div className="row">
              <label>
                Email Address
                <input type="email" placeholder="[your.email@address.com]" />
              </label>

              <label>
                Inquiry Type
                <select defaultValue="">
                  <option value="" disabled>
                    [Select inquiry type...]
                  </option>
                  <option>General Question</option>
                  <option>Vendor Registration</option>
                  <option>Market Manager Listing</option>
                </select>
              </label>
            </div>

            <label>
              Message
              <textarea rows="5" placeholder="[Write your message here...]" />
            </label>

            <button className="send-btn" type="submit">
              Send Message
            </button>
          </form>

          <aside className="side">
            <div className="support-card">
              <h2>Direct Support</h2>

              <div className="info">
                <span className="icon">✉</span>
                <div>
                  <p>Email support</p>
                  <a href="#">
                    support@freshfind.app
                  </a>
                </div>
              </div>

              <div className="info">
                <span className="icon">☎</span>
                <div>
                  <p>Community line</p>
                  <a href="#">+234111222-FRESH</a>
                </div>
              </div>
            </div>

            <div className="organizer-card">
              <div className="pin">📍</div>
              <h2>
                Are You a Local Market
                <br />
                Organizer?
              </h2>
              <a className="register-btn" href="#">
                Register Your Market Today →
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
