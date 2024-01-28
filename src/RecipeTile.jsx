import React from "react";
import "./RecipeTile.css";
export default function RecipeTile({ recipe }) {
  return (
    <div className="w-[47%] flex items-start m-5 bg-[#d1e9eb] text-[#0b0d0d] rounded-lg">
      <img className="recipeTile_img m-5" src={recipe["recipe"]["image"]} />
      <p className="m-5 text-5xl font-extrabold ml-2 text-[#7f8383]">
        {recipe["recipe"]["label"]}
      </p>
    </div>
  );
}
