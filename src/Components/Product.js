import React from "react";
import Shoes from "./../shoes.json";

function Product() {
  console.log(Shoes);
  return (
    <div>
      <h3>Welcome to Product</h3>
      <div>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <div key={keyName}>
              <h3>{shoe["name"]}</h3>
              <img src={shoe["img"]} height={200}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
