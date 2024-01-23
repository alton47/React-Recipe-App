// components/RecipeDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDetail = ({ recipe }) => (
  <div className="container mx-auto my-8">
    <h1 className="text-4xl font-bold mb-8 text-indigo-600">{recipe.name}</h1>
    <p className="mb-4">{recipe.description}</p>
    <p className="mb-2">Calories: {recipe.caloriesInKcal} Kcal</p>
    <p className="mb-2">Time: {recipe.timeInMins} mins</p>
    <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
    <ul className="list-disc pl-6 mb-4">
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h2 className="text-xl font-bold mb-2">Instructions:</h2>
    <p>{recipe.instructions}</p>
    <div className="mt-4">
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Back to Recipes
      </Link>
    </div>
  </div>
);

export default RecipeDetail;