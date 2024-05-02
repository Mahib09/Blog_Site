export function Header() {
  return (
    <div className="flex gap-4 ">
      <button className="text-2xl text-gray-500 hover:text-black">mm</button>
      <a href="/" className="ml-auto text-xl text-gray-500 hover:text-black">
        Home
      </a>
      <a href="/" className="text-xl text-gray-500 hover:text-black">
        Explore
      </a>
    </div>
  );
}
