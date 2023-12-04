import Logo from "@/images/Logo";

export default function Navbar() {
  return (
    <div className="flex justify-between m-auto px-[350px] py-[32px] w-[1920px]">
      <Logo />
      <div className="flex gap-10 text-[16px] font-normal rounded-[5px] text-[#3B3C4A]">
        <div>Home</div>
        <div>BLog</div>
        <div>Contact</div>
        <div className="flex">
          <input type="search" className="bg-[#F4F4F5] w-[166px]" />
        </div>
      </div>
    </div>
  );
}
