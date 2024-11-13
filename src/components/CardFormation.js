import React from 'react';

const CardFormation = ({ image, title, description }) => {
  return (
    <div className="card mb-4 shadow rounded-4" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top rounded-4" alt={title} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title primaryColor">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardFormation;