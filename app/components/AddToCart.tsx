"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() =>
          console.log({ from: "Client component in server component" })
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
