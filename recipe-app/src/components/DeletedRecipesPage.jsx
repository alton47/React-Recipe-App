import React from 'react';
import RecipeBox from './RecipeBox';
import recipesData from '../data/recipesData';

const DeletedRecipesPage = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">Deleted Recipes</h1>
      <div className="grid grid-cols-3 gap-6">
        {recipesData.slice(0, 5).map((recipe, index) => (
          <RecipeBox key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default DeletedRecipesPage;