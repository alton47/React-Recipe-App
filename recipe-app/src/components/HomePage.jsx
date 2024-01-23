// src/components/HomePage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeBox from './RecipeBox'; // Import RecipeBox
import recipesData from '../data/recipesData';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">Recipe App</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add New Recipe Button */}
      <Link to="/add-recipe">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add New Recipe</button>
      </Link>

      {/* Recipe Grid */}
      <div className="grid grid-cols-3 gap-6 mt-4">
        {filteredRecipes.map((recipe, index) => (
          <RecipeBox key={index} recipe={recipe} /> {/* Use RecipeBox component */}
        ))}
      </div>
    </div>
  );
};

export default HomePage;