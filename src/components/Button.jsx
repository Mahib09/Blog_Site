export function Button(props) {
  return (
    <button className="p-3 bg-gray-300 rounded-lg text-md text-black hover:bg-gray-600 hover:text-gray-300 transition-all">
      {props.name}
    </button>
  );
}
