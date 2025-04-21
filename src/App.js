import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./project/Header";
import Home from "./project/Home";
import Movies from "./project/Movies";
import Tvshow from "./project/Tvshow";
import HBO from "./project/HBO";
import About from "./project/About";
import Farm from "./project/Farm";
import Login from "./project/Login";
import PeoplePage from "./project/PeoplePage";
import { Button } from "react-bootstrap";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{ width: "100%" }}>
      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}

      {isLoggedIn && (
        <Button
          variant="secondary"
          className="position-fixed toggle-theme"
          style={{
            top: "100px",
            right: "10px",
            padding: "8px 15px",
            fontSize: "14px",
            border: "none",
            borderRadius: "20px",
            zIndex: 1050,
            backgroundColor: darkMode ? "#555" : "#333",
            color: "white"
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#555"}
          onMouseLeave={(e) => e.target.style.backgroundColor = darkMode ? "#555" : "#333"}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </Button>
      )}

      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100 loading">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <TransitionGroup>
          <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames="fade" timeout={500}>
            <div ref={nodeRef} className="container mt-4" style={{ width: "100%" }}>
              <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/" element={<Navigate to="/Home" />} />
                {isLoggedIn && (
                  <>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/tvshow" element={<Tvshow />} />
                    <Route path="/HBO" element={<HBO />} />
                    <Route path="/people" element={<PeoplePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/farm" element={<Farm />} />
                  </>
                )}
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}

      {scroll && (
        <Button
          variant="primary"
          className="position-fixed bottom-2 end-2 scroll-to-top"
          style={{
            bottom: "20px",
            right: "20px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease, transform 0.3s ease"
          }}
          onClick={scrollToTop}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }}
        >
          ↑
        </Button>
      )}
    </div>
  );
}

export default App;
