export default function ButtonL(props) {
  return (
    <div>
      <button className="flex justify-center items-center w-[384px] h-[48px] text-[#fff] rounded-3xl bg-[#0166FF]">
        {props.text}
      </button>
    </div>
  );
}
