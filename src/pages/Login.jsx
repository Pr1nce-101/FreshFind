import { useEffect, useState } from "react";
import "../styles/Login.css";
import farmersImage from "../assets/farmers.png";
// import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const savedSession = localStorage.getItem("loggedInUser");
    if (savedSession) {
      setLoggedInUser(JSON.parse(savedSession));
    }
  }, []);

  function getUsers() {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  }

  function emailAlreadySaved(value) {
    const users = getUsers();
    return users.some(
      (user) => user.email.toLowerCase() === value.trim().toLowerCase(),
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      setError("Please fill in your email and password.");
      return;
    }

    const users = getUsers();

    if (isSignUp) {
      if (emailAlreadySaved(cleanEmail)) {
        setError("This email is already saved. Please sign in.");
        setIsSignUp(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const newUser = { email: cleanEmail, password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      const session = { email: cleanEmail };
      localStorage.setItem("loggedInUser", JSON.stringify(session));
      setLoggedInUser(session);
      setPassword("");
      setConfirmPassword("");
      return;
    }

    const foundUser = users.find(
      (user) => user.email.toLowerCase() === cleanEmail,
    );

    if (!foundUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (foundUser.password !== password) {
      setError("Wrong password.");
      return;
    }

    const session = { email: cleanEmail };
    localStorage.setItem("loggedInUser", JSON.stringify(session));
    setLoggedInUser(session);
    setPassword("");
  }

  function handleSignOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setIsSignUp(false);
    setError("");
  }

  const alreadyRegistered = emailAlreadySaved(email);
  const showSignInText = !isSignUp && alreadyRegistered;

  return (
    <div className="page">
      <div className="card">
        <div className="form-side">
          {loggedInUser ? (
            <>
              <p>
                Jadel since you are in charge of the routing you will take it
                from here and route the user to the home page when the user has
                crated an account
              </p>
              useNavigate("");
            </>
          ) : (
            <>
              <p className="welcome">Welcome</p>
              <h1>
                {isSignUp ? "Sign Up" : showSignInText ? "Sign In" : "Log In"}
              </h1>

              <form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}

                <label>
                  Your Email
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label>
                  Password
                  <div className="password-wrap">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="eye-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>

                {isSignUp && (
                  <label>
                    Confirm password
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Repeat password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </label>
                )}

                {!isSignUp && (
                  <button
                    type="button"
                    className="forgot"
                    onClick={() =>
                      setError(
                        "Forgot password is only a demo. Use the password you saved.",
                      )
                    }
                  ></button>
                )}

                <button className="green-btn" type="submit">
                  {isSignUp ? "Sign Up" : showSignInText ? "Sign In" : "Log In"}
                </button>
              </form>

              <p className="bottom-text">
                {isSignUp ? (
                  <>
                    Already have an account ?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignUp(false);
                        setError("");
                      }}
                    >
                      Sign In
                    </button>
                  </>
                ) : (
                  <>
                    Don't have an account ?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSignUp(true);
                        setError("");
                      }}
                    >
                      Sign-up
                    </button>
                  </>
                )}
              </p>
            </>
          )}
        </div>

        <div className="promo-side">
          <h3 className="brand">Fresh Find</h3>
          <img src={farmersImage} alt="Farmers with fresh food" />
          <h2>Get the best premium food</h2>
          <p>
            You can get the best premium food with the best price
            <br />
            only in HERE !
          </p>
        </div>
      </div>
    </div>
  );
}
