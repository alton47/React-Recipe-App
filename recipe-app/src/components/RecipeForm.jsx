import React from 'react';

const RecipeForm = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">Recipe App</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Recipe Form</h2>
        {/* Form fields go here */}
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Ingredients Form</h2>
        {/* Ingredients form fields go here */}
      </div>
      <div className="flex space-x-4">
        <button className="btn btn-gray">Cancel</button>
        <button className="btn btn-blue">Save</button>
      </div>
    </div>
  );
};

export default RecipeForm;