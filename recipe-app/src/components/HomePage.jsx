// components/HomePage.jsx
import React from 'react';
import RecipeBox from './RecipeBox';  // Assuming you have a RecipeBox component
import recipesData from '../data/recipesData';

const HomePage = () => (
  <div className="container mx-auto my-8">
    <h1 className="text-4xl font-bold mb-4 text-indigo-600">Recipe App</h1>
    <div className="grid grid-cols-3 gap-6">
      {recipesData.map((recipe, index) => (
        <RecipeBox key={index} recipe={recipe} />
      ))}
    </div>
  </div>
);

export default HomePage;