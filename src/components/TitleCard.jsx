import { Link } from "react-router-dom";

export function TitleCard(props) {
  return (
    <Link to={props.to}>
      <div className="h-16 flex flex-col group cursor-pointer sm:flex-row">
        <p className="self-start pt-0 mt-3 text-base font-bold sm:text-2xl sm:content-center sm:mt-4">
          {props.title}
        </p>
        <p className=" text-sm mt-0 text-gray-500 group-hover:text-black transition ease-in-out delay-25 self-start cursor-pointer sm:ml-auto sm:text-lg sm:mt-4">
          {props.dateCreated}
        </p>
      </div>
      <hr />
    </Link>
  );
}
