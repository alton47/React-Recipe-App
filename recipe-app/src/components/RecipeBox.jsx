// components/RecipeBox.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeBox = ({ recipe }) => (
  <div className="mb-4">
    <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
    <p className="mb-2">{recipe.description}</p>
    <div className="flex justify-between">
      <Link to={`/recipe/${recipe.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">View Recipe</Link>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Delete</button>
    </div>
  </div>
);

export default RecipeBox;