import React from 'react';

const RecipeDetail = ({ recipe }) => {
  const { name, ingredients, instructions, calories, time } = recipe;

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">{name}</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Ingredients</h2>
        <ul className="list-disc pl-6">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Instructions</h2>
        <p className="text-gray-700">{instructions}</p>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-semibold text-gray-700">Calories:</span> {calories} Kcal
        </div>
        <div>
          <span className="font-semibold text-gray-700">Time:</span> {time} mins
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="btn btn-blue">View Recipe</button>
        <button className="btn btn-red">Delete</button>
      </div>
    </div>
  );
};

export default RecipeDetail;