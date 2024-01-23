// components/RecipeBox.jsx
import React from 'react';

const RecipeBox = ({ recipe }) => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
    <p className="mb-2">{recipe.description}</p>
    <div className="flex justify-between mt-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">View Recipe</button>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Delete</button>
    </div>
  </div>
);

export default RecipeBox;