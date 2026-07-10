import { useContext } from "react";
import Pagination from "../components/pagination";
import { BlogsContext } from "../context/DataOfBlogsContext";

const Blogs = () => {
  const { blogs } = useContext(BlogsContext);

  return <Pagination items={blogs} isBlog={true} />;
};

export default Blogs;