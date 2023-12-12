export default function Sorts() {
  return (
    <div className="m-auto flex flex-col gap-4 max-w-[1230px] mb-5">
      <div className="flex flex-col gap-8">
        <h1 className="text-[24px] text-[#181A2A] font-bold">All Blog post</h1>
      </div>
      <div className="flex justify-between text-[12px] text-[#495057] font-bold">
        <div className="gap-5 flex ">
          <a href="" className="text-[#D4A373]">
            All
          </a>
          <a href="">Design</a>
          <a href="">Travel</a>
          <a href="">Fashion</a>
          <a href="">Technology</a>
          <a href="">Branding</a>
        </div>
        <div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
}
