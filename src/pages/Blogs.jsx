import { useEffect, useState } from "react";
import Pagination from "../components/pagination";

const Blogs = () => {
  const isBlog = true;
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetch("/api/blogs.json");
        if (!data.ok) return;
        const response = await data.json();
        setBlogs(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);
  return <Pagination isBlog = {isBlog} items={blogs} />;
};

export default Blogs;
