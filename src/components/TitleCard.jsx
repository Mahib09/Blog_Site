import { Link } from "react-router-dom";

export function TitleCard(props) {
  return (
    <Link to={props.to}>
      <div className="h-16 flex flex-col group cursor-pointer sm:flex-row">
        <p className="self-start pt-0 mt-3 text-base font-bold sm:text-2xl sm:content-center sm:mt-6 dark:text-white">
          {props.title}
        </p>
        <p className=" text-sm mt-0 text-gray-500 group-hover:text-black transition ease-in-out delay-25 self-start cursor-pointer sm:ml-auto sm:text-lg sm:mt-7 dark:text-neutral-400 dark:group-hover:text-white">
          {props.dateCreated}
        </p>
      </div>
      <hr className="h-2" />
    </Link>
  );
}
