import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Remplacez par votre Service ID
        "your_template_id", // Remplacez par votre Template ID
        formData,
        "your_public_key" // Remplacez par votre clé publique EmailJS
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Erreur : ", error);
          setStatus("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="container">
      <h2 className="primaryColor text-center mb-3">Demande d'Information</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label primaryColor fw-bold">
            Prénom
          </label>
          <input
            type="text"
            placeholder="Ex : Dudu"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label primaryColor fw-bold">
            Nom
          </label>
          <input
            type="text"
            placeholder="Ex : Ndiaye"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label primaryColor fw-bold">
            Téléphone
          </label>
          <input
            type="tel"
            placeholder="Ex : +221 77 123 45 67"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label primaryColor fw-bold">
            Email
          </label>
          <input
            type="email"
            placeholder="Ex : dudu@gmail.com"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label primaryColor fw-bold">
            Message
          </label>
          <textarea
            className="form-control"
            placeholder="Votre message ici..."
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn primaryBg rounded-pill text-white">
          Envoyer un message
          </button>
        </div>
        {status && (
          <div className="col-12 mt-3">
            <div className="alert alert-info">{status}</div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
