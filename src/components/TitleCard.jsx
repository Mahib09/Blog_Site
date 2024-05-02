export function TitleCard(props) {
  return (
    <>
      <div className="h-12 flex flex-wrap gap-3 content-center group">
        <h1 className="text-2xl self-center p-2">{props.title}</h1>
        <p className="p-2 ml-auto text-xl text-gray-500 group-hover:text-black transition ease-in-out delay-25 self-center cursor-pointer ">
          {props.dateCreated}
        </p>
      </div>
      <hr />
    </>
  );
}
