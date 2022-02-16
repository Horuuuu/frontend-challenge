import React from 'react';
import '../assets/css/dish.css';
export const ItemDetail = ({ dish }) => {
  return (
    <>
      <div className="card mb-3 dish">
        <div className="row g-0 dish">
          <div className="col-md-4 dish">
            <img src={dish.image} className="dish" alt="..." />
          </div>
          <div className="col-md-8 dish">
            <div className="card-body ">
              <h4 className="card-title dish">{dish.title}</h4>
              <h6 className="dish">Resumen del plato:</h6>
              <p className="card-text dish">{dish.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
