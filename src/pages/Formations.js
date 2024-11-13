// src/components/Formations.js
import React from "react";
import CardFormation from "../components/CardFormation";
import geniCivil from "../assets/formations/geni-civil.png";
import electrotech from "../assets/formations/electrotech.png";
import electronique from "../assets/formations/electronique.png";
import froid from "../assets/formations/froid.png";
import structureMetalic from "../assets/formations/structure-metalique.png";
import geomatique from "../assets/formations/geomatique.png";
import pavage from "../assets/formations/pavage.png";
import soudage from "../assets/formations/soudage.png";
import elecBat from "../assets/formations/electricite-batiment.png";
import devWeb from "../assets/formations/dev-web-mobile.png";
import reseau from "../assets/formations/reseau.png";
import energieDurable from "../assets/formations/energie-durable.png";

// Array of formation objects categorized
const formationsData = {
  formationInitiale: [
    {
      image: geniCivil,
      title: "Génie Civil",
      description:
        "Formation en génie civil pour la construction et les infrastructures.",
    },
    {
      image: electrotech,
      title: "Electrotechnique",
      description:
        "Apprentissage des techniques de l’électrotechnique moderne.",
    },
    {
      image: electronique,
      title: "Electronique (APC)",
      description:
        "Formation en électronique appliquée et systèmes de contrôle.",
    },
    {
      image: froid,
      title: "Froid et Climatisation",
      description:
        "Formation spécialisée en installation et maintenance des systèmes de froid et climatisation.",
    },
    {
      image: structureMetalic,
      title: "Structures Métalliques",
      description:
        "Formation en conception et montage de structures métalliques.",
    },
    {
      image: geomatique,
      title: "Géomatique",
      description:
        "Études des systèmes de géomatique et applications dans les sciences de la terre.",
    },
  ],
  cps: [
    {
      image: pavage,
      title: "Pavage Carrelage",
      description:
        "Formation pratique en pavage et carrelage pour le bâtiment.",
    },
    {
      image: soudage,
      title: "Soudage",
      description:
        "Formation complète aux techniques de soudage pour les travaux industriels.",
    },
    {
      image: elecBat,
      title: "Électricité Bâtiment",
      description:
        "Formation en électricité pour les installations dans le bâtiment.",
    },
    {
      image: devWeb,
      title: "Développement Web et Mobile",
      description: "Formation en développement d’applications web et mobiles.",
    },
    {
      image: reseau,
      title: "Réseaux et Télécommunications",
      description:
        "Formation en installation et gestion des réseaux de communication.",
    },
    {
      image: energieDurable,
      title: "Génie Thermique et Énergie Durable",
      description:
        "Étude des solutions énergétiques durables et génie thermique.",
    },
  ],
};

const Formations = () => {
  return (
    <div className="container my-5 pt-5">
      <h2 className="text-center mb-4">Nos Formations</h2>

      {/* Formation Initiale Section */}
      <span
        class="badge rounded-pill text-bg-primary primaryBg my-3
      "
      >
        Formation Initiale
      </span>
      <div className="row">
        {formationsData.formationInitiale.map((formation, index) => (
          <div key={index} className="col-md-4 d-flex  justify-content-center">
            <CardFormation
              image={formation.image}
              title={formation.title}
              description={formation.description}
            />
          </div>
        ))}
      </div>

      {/* CPS Section */}
      <span
        class="badge rounded-pill text-bg-primary primaryBg my-3
      "
      >
        Certificat Professionnel de Spécialisation (CPS)
      </span>
      <div className="row">
        {formationsData.cps.map((formation, index) => (
          <div key={index} className="col-md-4 d-flex  justify-content-center">
            <CardFormation
              image={formation.image}
              title={formation.title}
              description={formation.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formations;
