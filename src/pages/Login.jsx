import React from "react";
import login from '../images/login.png';
import fb from '../images/fb.PNG';
import gogle from '../images/google.png';

const Login = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        maxWidth: "1000px",
        width: "90%",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        backgroundColor: "#ffffff",
        margin: "auto",
        height: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="form-container"
        style={{
          flex: 1,
          backgroundColor: "#0056a3",
          color: "white",
          padding: "2rem",
          borderRadius: "20px 0 0 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Login</h2>
        <form>
          <div className="form-group" style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "0.5rem", fontSize: "1rem" }}
            >
              Email address :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "25px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "0.5rem", fontSize: "1rem" }}
            >
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: "25px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          <button
            type="submit"
            className="sign-in-btn"
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "#0056a3",
              border: "none",
              padding: "0.7rem",
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Sign In
          </button>

          <div className="signup-link" style={{ marginTop: "1rem", fontSize: "0.9rem", color: "white" }}>
            Don't have an account?{" "}
            <a href="/signup" style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}>
              Sign Up
            </a>
          </div>

          <div
            className="or-divider"
            style={{
              display: "flex",
              alignItems: "center",
              margin: "1.5rem 0",
              color: "white",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ margin: "0 0.5rem" }}>OR</span>
            <div style={{ flex: 1, height: "1px", background: "white", marginLeft: "-1.5rem" }}></div>
          </div>

          <div className="social-buttons" style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <img src={gogle} alt="Google Login" style={{ height: "40px", width: "40px", cursor: "pointer" }} />
            <img src={fb} alt="Facebook Login" style={{ height: "40px", width: "40px", cursor: "pointer" }} />
          </div>
        </form>
      </div>

      <div
        className="image-container"
        style={{
          flex: 1,
          backgroundColor: "#f8f9fc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          borderRadius: "0 20px 20px 0",
        }}
      >
        <img src= {login} alt="Login Illustration" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </div>
  );
};

export default Login;
