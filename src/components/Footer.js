import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-4">
        <div className="col-md-4 text-center mb-3">
          <a href="/" className="text-decoration-none primaryColor">
            <h3>CEDT - Le G15</h3>
          </a>
        </div>
        <div className="col-md-4 mb-3">
          <ul className="list-unstyled d-flex justify-content-between align-items-center flex-wrap">
            <li className="">
              <Link className="text-decoration-none primaryColor" to="/">
                Accueil
              </Link>
            </li>
            <li className="">
              <Link
                className="text-decoration-none primaryColor"
                to="/presentation"
              >
                Présentation
              </Link>
            </li>
            <li className="">
              <Link
                className="text-decoration-none primaryColor"
                to="/formations"
              >
                Formations
              </Link>
            </li>
            <li className="">
              <Link className="text-decoration-none primaryColor" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4 d-flex justify-content-center mb-3">
          <div>
            <ul className="list-unstyled d-flex gap-3">
              <li className="px-3 py-2 secondBg rounded" width="36px">
                <a href="">
                  <FaFacebookF className="primaryColor fs-4" />
                </a>
              </li>
              <li className="px-3 py-2 secondBg rounded" width="36px">
                <a href="">
                  <FaTwitter className="primaryColor fs-4" />
                </a>
              </li>
              <li className="px-3 py-2 secondBg rounded" width="36px">
                <a href="">
                  <FaInstagram className="primaryColor fs-4" />
                </a>
              </li>
              <li className="px-3 py-2 secondBg rounded" width="36px">
                <a href="">
                  <FaLinkedin className="primaryColor fs-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p className="primaryColor">Copyright © 2024 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
