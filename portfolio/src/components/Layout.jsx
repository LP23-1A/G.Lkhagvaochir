export default function Layout({ children }) {
  return (
    <div className="m-auto max-w-[1440px] py-4 px-20 text-center flex justify-center items-center justify-between">
      {children}
    </div>
  );
}
