import Navbar from "@/components/Navbar";
import AllBlog from "@/components/Allblog";
import Trending from "@/components/Trending";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Sorts from "@/components/sorts";

export default function Home() {
  const [articles, setArticles] = useState([]);
  // const [discuss, setDiscuss] = useState([]);

  const fetchData = async () => {
    const BASE_URL = "https://dev.to/api/articles";
    const res = await axios.get(BASE_URL);

    setArticles(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   setDiscuss(filterByTags(articles, "discuss"));
  // }, [articles]);

  return (
    <div className="Container max-w-full flex flex-col gap-[100px]">
      <section className="Navbar">
        <Navbar />
      </section>
      <section>
        <Carousel articles={articles} />
      </section>
      <section>
        <Trending />
      </section>
      <section>
        <Sorts />
        <AllBlog />
      </section>
      <footer className="bg-[#F6F6F7]">
        <Footer />
      </footer>
    </div>
  );
}
