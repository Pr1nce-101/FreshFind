import { useEffect, useState } from "react";
import "../styles/Login.css";
import farmersImage from "../assets/farmers.png";
// import { useNavigate } from "react-router-dom";
export default function Login() {
  return (
    <div className="login-page">
      <div className="blob blob-gold" />
      <div className="blob blob-lime-tr" />
      <div className="blob blob-dark-br" />
      <div className="blob blob-mid-l" />

      <main className="shell">
        <section className="form-side">
          <p className="welcome">Welcome</p>
          <h1 className="title">Log In</h1>

          <form>
            <div className="field">
              <label htmlFor="email">Your Email</label>
              <div className="input-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  required
                />
                <svg
                  className="eye"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <button className="login-btn" type="submit">
              Log In
            </button>
          </form>

          <p className="signup-row">
            Don&apos;t have an account? <a href="#">Sign up</a>
          </p>
        </section>

        <aside className="promo-side">
          <div className="brand">
            <h2>FreshFind</h2>
          </div>

          <div className="art">
            <img
              src={farmersImage}
              alt="Farmers with premium produce and coins"
            />
          </div>

          <div className="promo-copy">
            <h3>Get the best premium food</h3>
            <p>
              You can get the best premium food with the best price
              <br />
              only in HERE!
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
