import AllBlog from "@/components/Allblog";
import Navbar from "@/components/Navbar";

const blog = () => {
  return (
    <div>
      <Navbar />
      <AllBlog isAllBlog={true} />
    </div>
  );
};
export default blog;
