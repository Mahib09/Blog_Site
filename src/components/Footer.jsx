export function Footer() {
  return (
    <div className="container">
      <div className="flex flex-col w-100vw items-center pt-10 gap-3">
        <p className="text-xl text-gray-500">All rights reserved - mm.fyi</p>
        <div className="flex gap-2 text-gray-500 text-lg">
          <a
            href="https://www.linkedin.com/in/ranamagarmahib/"
            target="_blank"
            className="hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Mahib09"
            target="_blank"
            className="hover:text-black"
          >
            Github
          </a>
          <a
            href="mailto:magarmahib@gmail.com"
            target="_blank"
            className="hover:text-black"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
