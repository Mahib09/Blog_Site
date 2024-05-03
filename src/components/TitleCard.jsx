import { Link } from "react-router-dom";

export function TitleCard(props) {
  return (
    <Link to={props.to}>
      <div className="h-16 flex flex-wrap gap-3 content-center group cursor-pointer">
        <p className="self-center p-2 pt-0">{props.title}</p>
        <p className="p-2 ml-auto text-xl text-gray-500 group-hover:text-black transition ease-in-out delay-25 self-center cursor-pointer ">
          {props.dateCreated}
        </p>
      </div>
      <hr />
    </Link>
  );
}
