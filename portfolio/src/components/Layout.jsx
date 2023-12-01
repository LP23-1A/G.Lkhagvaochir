export default function Layout({ children }) {
  return (
    <div className="m-auto max-w-[1440px] py-4 px-20 text-center flex max-sm:px-4 max-sm:py-4 items-center justify-between">
      {children}
    </div>
  );
}
