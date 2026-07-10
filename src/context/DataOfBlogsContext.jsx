import { createContext, useEffect, useState } from "react";

export const BlogsContext = createContext();

export const DataOfBlogsContext = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  async function getData() {
    try {
      const response = await fetch("/api/blogs.json");

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await getData();
      setBlogs(data);
    }

    loadData();
  }, []);

  return (
    <BlogsContext.Provider value={{ blogs }}>
      {children}
    </BlogsContext.Provider>
  );
};

export default DataOfBlogsContext;