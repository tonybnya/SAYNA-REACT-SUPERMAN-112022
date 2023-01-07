import React from 'react';
import '../styles/cards.css';

const Cards = (props) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
        <div className="col">
          <div className="card embed-responsive embed-responsive-16by9">
            <img src={ props.img1 } className="card-img-top embed-responsive-item" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ props.img2 } className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ props.img3 } className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;