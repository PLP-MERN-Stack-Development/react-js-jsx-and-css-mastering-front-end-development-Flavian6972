import React, { useState, useMemo } from "react";
import { fetchUsers } from "../api/api";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function ApiDataPage() {
  const { data: users, loading, error } = useFetch(fetchUsers);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  // Filtered users
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [users, query]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">User Directory</h1>
      <SearchBar query={query} onChange={setQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.company.name}</p>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ApiDataPage;
