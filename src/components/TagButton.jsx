export default function TagButton(props) {
  return (
    <button className="p-2 sm:p-3 bg-gray-300 rounded-lg text-sm sm:text-md text-black hover:bg-neutral-800 hover:text-gray-300 transition-all">
      {props.name}
    </button>
  );
}
