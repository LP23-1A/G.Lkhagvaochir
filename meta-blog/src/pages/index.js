import Navbar from "@/components/Navbar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="Container w-[1920px]">
      <section className="Navbar">
        <Navbar />
      </section>
      <section>
        <Trending />
      </section>
    </div>
  );
}
