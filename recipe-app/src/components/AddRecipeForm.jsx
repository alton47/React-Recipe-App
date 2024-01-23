// AddRecipeForm.jsx

import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe, onCancel }) => {
  const [recipeName, setRecipeName] = useState('');
  const [cookingInstructions, setCookingInstructions] = useState('');
  const [calories, setCalories] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleAddRecipe = () => {
    // Validate input fields (you can add more validation as needed)
    if (recipeName && cookingInstructions && calories && cookingTime && ingredients) {
      const newRecipe = {
        name: recipeName,
        instructions: cookingInstructions,
        calories: calories,
        time: cookingTime,
        ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      };

      // Call the onAddRecipe function passed from the parent component
      onAddRecipe(newRecipe);

      // Clear the form fields
      setRecipeName('');
      setCookingInstructions('');
      setCalories('');
      setCookingTime('');
      setIngredients('');
    }
  };

  return (
    <div className="mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form>
        <label>
          Recipe Name:
          <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
        </label>
        <label>
          Cooking Instructions:
          <textarea
            value={cookingInstructions}
            onChange={(e) => setCookingInstructions(e.target.value)}
          ></textarea>
        </label>
        <label>
          Calories per 100g:
          <input type="text" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </label>
        <label>
          Cooking Time:
          <input type="text" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
        </label>
        <label>
          Ingredients (comma-separated):
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </label>
        <div className="mt-4">
          <button type="button" onClick={handleAddRecipe} className="btn-primary">
            Add Recipe
          </button>
          <button type="button" onClick={onCancel} className="btn-secondary ml-2">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;