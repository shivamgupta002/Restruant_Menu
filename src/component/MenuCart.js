import React from "react";

const MenuCart = ({ menuData }) => {
  return (
    <>
      <div className="card-container">
        {menuData.map((currElem) => {
          const { id, name, category, image, description, price } = currElem;

          return (
            <div className="card" key={id}>
              <div className="card-body">
                <span className="card-number card-circle subtitle">{id}</span>
                <span className="card-author subtitle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description ">
                  {description}
                  <br />
                </span>

                <img src={image} alt="img" />
                <div className="card-bottom">
                  <span className="price">Price: {price}</span>
                  <span className="card-tag subtitle">Order Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuCart;
