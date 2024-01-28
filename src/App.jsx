import "./key";
import Axios from "axios";
import "./App.css";
import { useState } from "react";
import RecipeTile from "./RecipeTile";
import React from "react";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");
  const url = `https://api.edamam.com/search?q=${query}&app_id=e9c48548&app_key=9b817681475014ea6fdfa8362b1d9701&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1 className="text-8xl font-extrabold" onClick={getRecipes}>
        Find Recipes!
      </h1>

      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app_input"
          id="search-bar"
          placeholder="Enter an ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <button className="ml-3" type="submit" class="cta">
          <span class="hover-underline-animation"> Search </span>
          <svg
            id="arrow-horizontal"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 46 16"
          ></svg>
        </button>

        <select className="app_healthLabels">
          <option
            onClick={() => {
              sethealthLabels("vegan");
            }}
          >
            Vegan
          </option>
          <option
            onClick={() => {
              sethealthLabels("dairy-free");
            }}
          >
            Dairy-free
          </option>

          <option
            onClick={() => {
              sethealthLabels("wheat-free");
            }}
          >
            Wheat-free
          </option>
          <option
            onClick={() => {
              sethealthLabels("egg-free");
            }}
          >
            Egg-free
          </option>
          <option
            onClick={() => {
              sethealthLabels("fish-free");
            }}
          >
            Fish-free
          </option>
          <option
            onClick={() => {
              sethealthLabels("low-sugar");
            }}
          >
            Low-sugar
          </option>
          <option
            onClick={() => {
              sethealthLabels("peanut-free");
            }}
          >
            Peanut-free
          </option>

          <option
            onClick={() => {
              sethealthLabels("paleo");
            }}
          >
            Paleo
          </option>
        </select>
      </form>

      <div className="flex flex-wrap place-items-center">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
