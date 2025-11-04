import React from 'react'; // Add this line
function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-400 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default SearchBar;
