import Navbar from "@/components/Navbar";
import AllBlog from "@/components/Allblog";
import Trending from "@/components/Trending";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="Container max-w-full flex flex-col gap-[100px]">
      <section className="Navbar">
        <Navbar />
      </section>
      <section>
        <Carousel />
      </section>
      <section>
        <Trending />
      </section>
      <section>
        <AllBlog />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
