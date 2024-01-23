import React from 'react';

const RecipeBox = ({ recipe }) => {
  const { name, description, calories, time } = recipe;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between mb-2">
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

export default RecipeBox;