import React from 'react';

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchBar;