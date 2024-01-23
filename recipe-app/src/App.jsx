// App.jsx
import React, { useState } from 'react';
import RecipeBox from './components/RecipeBox';
import recipesData from './data/recipesData';

const App = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const handleDelete = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">Recipe App</h1>
      <div className="grid grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeBox key={recipe.id} recipe={recipe} onDelete={() => handleDelete(recipe.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;