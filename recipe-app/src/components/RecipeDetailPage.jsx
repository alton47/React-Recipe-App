// components/RecipeDetailPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDetailPage = ({ match }) => {
  // Fetch recipe details based on match.params.id
  // Assuming you have a function getRecipeById in data/recipesData.js
  const recipe = getRecipeById(match.params.id);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">Recipe App</h1>
      <Link to="/" className="mb-4 text-blue-500 hover:underline">Back Home 🏠</Link>
      <div className="border p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">Calories: {recipe.calories}</p>
            <p className="text-lg font-bold">Time: {recipe.time} min</p>
          </div>
          <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Back Home 🏠</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;