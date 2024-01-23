// App.jsx
import React, { useState } from 'react';
import RecipeBox from './components/RecipeBox';
import recipesData from './data/recipesData';

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDelete = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
  };

  const handleViewDetails = (recipeId) => {
    const selected = recipes.find((recipe) => recipe.id === recipeId);
    setSelectedRecipe(selected);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">Recipe App</h1>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeBox
            key={recipe.id}
            recipe={recipe}
            onDelete={() => handleDelete(recipe.id)}
            onViewDetails={() => handleViewDetails(recipe.id)}
          />
        ))}
      </div>
      {selectedRecipe && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">{selectedRecipe.name}</h2>
            <p className="mb-4">{selectedRecipe.description}</p>
            {/* Add other details here */}
            <button onClick={() => setSelectedRecipe(null)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;