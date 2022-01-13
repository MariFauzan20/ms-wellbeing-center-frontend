import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  console.log(isLoggedIn);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
  };

  if (isLoggedIn) {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-3">
              <div className="logo">
                <a href="/" title="logo">
                  <span>Health</span>Byte
                </a>
              </div>
              <div className="mob-menu">
                <span>
                  <i className="fa fa-bars"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-9">
              <div className="main-menu">
                <ul className="nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/#about">About</a>
                  </li>
                  <li>
                    <a href="/#services">Services</a>
                  </li>
                  <li>
                    <Link as={Link} to="/articles">
                      Article
                    </Link>
                  </li>
                </ul>
                <ul className="right-nav">
                  <li>
                    <a href="/" className="nav-link" onClick={logout}>
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-3">
              <div className="logo">
                <a href="/" title="logo">
                  <span>Health</span>Byte
                </a>
              </div>
              <div className="mob-menu">
                <span>
                  <i className="fa fa-bars"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-9">
              <div className="main-menu">
                <ul className="nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/#about">About</a>
                  </li>
                  <li>
                    <a href="/#services">Services</a>
                  </li>
                  <li>
                    <Link as={Link} to="/articles">
                      Article
                    </Link>
                  </li>
                </ul>
                <ul className="right-nav">
                  <li>
                    <Link as={Link} to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="active">
                    <Link as={Link} to="/signup">
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
