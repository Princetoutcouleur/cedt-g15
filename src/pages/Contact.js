import React from 'react';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import contactImg from '../assets/contact-img.png';
import { FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container-fluid my-5 pt-5">
      <div className="container">
        <div className="row mb-5">
          {/* Cache la colonne Map sur les écrans sm et plus petits */}
          <div className="col-md-6 mb-3 rounded-4 d-none d-md-block">
            <Map />
          </div>
          <div className="col-md-6 mb-3 secondBg rounded-4 p-3">
            <ContactForm />
          </div>
        </div>
        <div className="row p-4">
          <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
            <div>
              <img src={contactImg} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
            <div>
              <ul className="list-unstyled">
                <li className="d-flex gap-4 mb-4">
                  <div className="primaryBg p-4 rounded">
                    <FaPhone className="fs-4 text-white" />
                  </div>
                  <div>
                    <p className="fw-bold">Téléphone</p>
                    <span>+221338249144</span>
                  </div>
                </li>
                <li className="d-flex gap-4 mb-4">
                  <div className="primaryBg p-4 rounded">
                    <FaEnvelope className="fs-4 text-white" />
                  </div>
                  <div>
                    <p className="fw-bold">Message Direct</p>
                    <span>cedt@orange.sn</span>
                  </div>
                </li>
                <li className="d-flex gap-4 mb-4">
                  <div className="primaryBg p-4 rounded">
                    <FaMapMarker className="fs-4 text-white" />
                  </div>
                  <div>
                    <p className="fw-bold">Adresse</p>
                    <span>BP 12761 Code postal 10624 Dakar Colobane/SEN</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
