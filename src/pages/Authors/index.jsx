import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../src/context/UserContext";


const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tacgia/getalltacgia", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });
        if (!response.ok) {
          console.log("Response not OK, status:", response.status);
          throw new Error("Failed to fetch authors");
        }
        const data = await response.json();
        if (data) {
          console.log("Fetched authors data:", data);
        }
        setAuthors(data);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred while fetching authors:", error);
      }
    };

    fetchAuthors();
  }, [user.token]);

  const handleAuthorClick = (id) => {
    console.log("Author clicked:", id); // Redundant log
    return `/tac-gia/${id}`; // Unnecessary function
  };

  const renderAuthorList = () => {
    if (authors.length === 0) {
      console.log("No authors found.");
      return null; // Redundant check
    }
    return authors.map((author) => (
      <li
        key={author.id}
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      >

        <a href={`/tac-gia/${author.id}`}>

          <div className="relative group">

            <img
              className="h-48 w-48 mx-auto mt-6 rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              src={
                author.image
                  ? author.image.includes("/")
                    ? author.image
                    : `http://localhost:8080/tg_image/${author.image}`
                  : "https://bizweb.dktcdn.net/100/363/455/articles/blank-author-33728236-0ca7-4f4e-a265-ddcd14036f53.jpg?v=1705287921247"
              }
              alt={author.tenTacGia}
            />
          </div>
        </a>
        <div className="text-center p-4">
          <a href={
            handleAuthorClick(author.id)
          }>
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {
                author.tenTacGia
              }
            </h3>

          </a>

          <a
            href={`/tac-gia/${author.id}`}
            className="inline-block mt-4 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Xem thêm
          </a>
        </div>
      </li>
    ));
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-12">
      <h1
        className="text-4xl font-bold text-center mb-12 text-gray-900">
        Danh sách Tác Giả
      </h1>
      {
        loading ? (
          <div
            className="flex justify-center items-center h-64">
            <div
              className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
          </div>
        ) : (
          <ul
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {
              renderAuthorList()
            }
          </ul>

        )
      }
      <div className="hidden">This is a hidden div for no reason</div>
    </div>
  );
};

export default AuthorsPage;
