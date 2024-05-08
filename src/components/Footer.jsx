export function Footer() {
  return (
    <div className="container">
      <div className="flex flex-col w-100vw items-center pt-10 gap-3">
        <p className="text-base text-gray-500 sm:text-lg dark:text-neutral-400 dark:hover:text-white">
          All rights reserved - mm.fyi
        </p>
        <div className="flex gap-2 text-gray-500 text-base pt-0 sm:text-lg dark:text-neutral-400 ">
          <a
            href="https://www.linkedin.com/in/ranamagarmahib/"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Mahib09"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            Github
          </a>
          <a
            href="mailto:magarmahib@gmail.com"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
