import React from "react";
// import { Link } from "react-router-dom";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Twt from "../assets/icon/twt.png";
import Fb from "../assets/icon/fb.png";
import Ig from "../assets/icon/ig.png";

export default function Footer() {
  return (
    <>
      <footer className="text-md-left bg-dark text-white p-5 font-link">
        <div className="container-fluid ps-5 pe-5 pt-3">
          <div className="row mx-auto ps-5">
            <div className="col-md-3 ps-4 mx-auto">
              <h5 className="font-weight-bold">HealthByte</h5>
              <p className="copyright pt-1">© 2022</p>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold">Company</h5>
              <ul className="list-unstyled pt-2">
                <li>
                  <a href="/#about">About Us</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold">Others</h5>
              <ul className="list-unstyled pt-2">
                <li>
                  <a href="#!">Price</a>
                </li>
                <li>
                  <a href="#!">Term & Conditions</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold">Follow Us</h5>
              <ul className="list-unstyled list-inline pt-2">
                <li className="list-inline-item">
                  <a href="/">
                    <img src={Fb} alt="" srcset="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <img src={Twt} alt="" srcset="" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/">
                    <img src={Ig} alt="" srcset="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
