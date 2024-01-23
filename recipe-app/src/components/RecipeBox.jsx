// components/RecipeBox.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeBox = ({ recipe, onDelete }) => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
    <p className="mb-2">{recipe.description}</p>
    <div className="flex space-x-4 mt-4">
      <Link to={`/recipe/${recipe.id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        View Recipe
      </Link>
      <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
        Delete
      </button>
    </div>
    <div className="mt-4">
      <p className="text-gray-600">Calories: {recipe.calories} Kcal</p>
      <p className="text-gray-600">Time: {recipe.time} mins</p>
    </div>
  </div>
);

export default RecipeBox;