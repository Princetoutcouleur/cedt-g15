import React from "react";
import boy from "../assets/boy.png";
import motivation from "../assets/motivation.png";
import atout from "../assets/atout.png";
import icon from "../assets/Vector.png";
import cathalogue from "../assets/cathalogue.png";

const Accueil = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="container-fluid header p-5 text-white d-flex align-items-center">
        <div>
          <h1 className="mb-3 fw-bold">LE G15</h1>
          <p className="mb-3 fw-bold">
            Nous proposons des formations diversifiées et adaptées aux <br />{" "}
            besoins du marché, allant des domaines techniques aux <br />
            compétences pratiques.
          </p>
          <div className="d-flex gap-4 flex-wrap">
            <div>
              <button className="btn btn-light primaryColor px-3 py-2 rounded">
                Contactez-nous
              </button>
            </div>
            <div>
              <button className="btn btn-default text-white border border-white px-3 py-2 rounded">
                Qui sommes nous ?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <h2>Bienvenue au CEDT - Le G15</h2>
        <div className="row rounded-4 mt-4 gap-0 py-5">
          <div className="col-md-6 p-0 m-0">
            <img src={boy} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 secondBg d-flex justify-content-center align-items-center p-5 rounded-4 rounded-start m-0">
            <div>
              <h3 className="mb-3">Introduction</h3>
              <p>
                Le Centre d’Entrepreneuriat et de Développement Technique (CEDT)
                - Le G15 est un établissement dédié à la formation technique et
                professionnelle. Équipé de salles de TP modernes, notre centre
                met l’accent sur la pratique pour offrir une formation de
                qualité adaptée aux besoins du marché du travail.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 primaryBg m-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5">
              <div className="d-flex justify-content-center mb-3">
                <img src={motivation} alt="" className="img-fluid" />
              </div>
              <div className="text-center text-white">
                <h4>Motivation</h4>
                <p>
                  Des équipements de dernière génération et une approche
                  pratique favorisant l’apprentissage par la pratique.
                </p>
              </div>
            </div>
            <div className="col-md-6 p-5">
              <div className="d-flex justify-content-center mb-3">
                <img src={atout} alt="" className="img-fluid" />
              </div>
              <div className="text-center text-white">
                <h4>Atouts</h4>
                <p>
                  Notre mission est de promouvoir l’interaction entre les
                  domaines du commerce, de l’investissement et de la
                  technologie. Nous contribuons au développement des compétences
                  techniques pour les entreprises locales (PME/PMI) et
                  accompagnons nos étudiants dans leur insertion
                  professionnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row rounded-4">
          <div className="col-md-6 primaryBg d-flex justify-content-center align-items-center m-0 rounded-4 rounded-start p-5">
            <div className="text-white text-center">
              <h3 className="mb-2">Pour toutes informations</h3>
              <h3 className="mb-3">Télécharger notre Catalogue</h3>
              <div className="d-flex justify-content-center">
                <button className="btn btn-light px-3 py-2 rounded-pill">
                  Télécharger <img src={icon} alt="" className="ms-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0">
            <img src={cathalogue} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
