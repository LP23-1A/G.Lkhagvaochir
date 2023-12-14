import Logo from "@/images/Logo";

export default function Navbar() {
  return (
    <div className="flex items-start py-8 m-auto max-w-[1230px]">
      <div className="flex items-start">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="flex gap-10 text-[16px] font-normal rounded-[5px] text-[#3B3C4A]">
        <div className="flex gap-10 justify-center items-center w-[667px] text-[#3B3C4A] text-[16px]">
          <a href="/">Home</a>
          <a href="blog">BLog</a>
          <a href="contact">Contact</a>
        </div>
        <div className="flex">
          <input
            type="search"
            placeholder="Search"
            className="bg-[#F4F4F5] w-[166px] h-[36px] pl-4 px-2"
          />
        </div>
      </div>
    </div>
  );
}
