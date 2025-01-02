import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../src/context/UserContext";

import { useParams } from "react-router-dom";
import { BookSlider } from "../../component/Slider";
import axios from "axios";

const DetailAuthorPage = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/sach/getsachbytacgia/${authorId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [authorId, user.token]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/tacgia/getTacGia/${authorId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch authors");
        }
        const data = await response.json();
        setAuthor(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, [authorId, user.token]);

  return (
    <div className="max-w-7xl mx-auto p-4 mt-16">
      {loading ? (
        <div
          className="flex justify-center items-center h-96">
          <p
            className="text-lg text-gray-500 animate-pulse">Loading...</p>
        </div>
      ) : (
        <div key={author?.id} className="flex flex-col items-center px-4">
          <div
            className="flex gap-8 lg:flex-row flex-col items-center">
            <div
              className="shadow-lg rounded-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                className="h-64 w-64 lg:h-80 lg:w-80 object-cover transform hover:scale-105 transition-transform duration-300"
                src={
                  author?.image
                    ? author.image.includes("/")
                      ? author.image
                      : `http://localhost:8080/tg_image/${author.image}`
                    : "https://bizweb.dktcdn.net/100/363/455/articles/blank-author-33728236-0ca7-4f4e-a265-ddcd14036f53.jpg?v=1705287921247"
                }
                alt={author?.tenTacGia}
              />
            </div>
            <div
              className="flex-1 text-center lg:text-left">
              <h2
                className="text-3xl font-bold text-gray-900 mb-4">
                {author?.tenTacGia}
              </h2>
              <p
                className="text-lg text-gray-700 leading-7 hover:text-gray-900 transition-colors duration-300">
                Là một trong những nhà báo nổi tiếng, ông đã viết ra rất nhiều những
                bài phóng sự nổi tiếng. Phóng sự đầu tay được ông viết ra năm 1933
                mang tên Cạm bẫy người được đăng trên tờ Nhật Tân dưới bút danh
                Thiên Hư. Bài phóng sự này của ông đã gây ra một làn sóng dư luận
                đương thời. Năm 1934, với phóng sự mang nhan đề Kỹ nghệ lấy Tây
                được đăng trên báo Nhật Tân và một số những tác phẩm phóng sự khác
                đã làm lên tên tuổi của nhà văn.
              </p>

            </div>

          </div>
        </div>
      )}
      {
        books && (
          <div
            className="py-12 mt-16 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h3
              className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-10 hover:text-blue-600 transition-colors duration-300">
              Sách cùng tác giả
            </h3>
            <div className="relative">
              <BookSlider books={books} />
            </div>
          </div>
        )
      }
    </div>

  );
};

export default DetailAuthorPage;
