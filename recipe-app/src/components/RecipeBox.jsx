// components/RecipeBox.jsx
import React, { useState } from 'react';

const RecipeBox = ({ recipe, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{recipe.name}</h2>
      <p className="mb-2">{recipe.description}</p>
      <div className="flex space-x-4 mt-4">
        <button onClick={handleViewDetails} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          View Recipe
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          Delete
        </button>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Calories: {recipe.calories} Kcal</p>
        <p className="text-gray-600">Time: {recipe.time} mins</p>
      </div>
      {showDetails && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Recipe Details</h2>
            <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
            <ul className="list-disc pl-6 mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-2">Instructions:</h3>
            <p>{recipe.instructions}</p>
            <div className="flex justify-end mt-4">
              <button onClick={handleCloseDetails} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeBox;