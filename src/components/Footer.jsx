import { Copyright, Github, Linkedin, Mail } from "lucide-react";
export function Footer() {
  return (
    <div className="container">
      <div className="flex flex-col w-100vw items-center pt-10 gap-3">
        <p className="text-base text-gray-500 sm:text-lg dark:text-neutral-400">
          <Copyright className="inline mr-2 mb-1 dark:text-neutral-400 cursor-text" />
          All rights reserved - mm.fyi
        </p>
        <div className="flex gap-2 text-gray-500 text-base pt-0 sm:text-lg dark:text-neutral-400 ">
          <a
            href="https://www.linkedin.com/in/ranamagarmahib/"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <Linkedin
              size={18}
              className="inline mr-1 mb-2 sm:h-[20px] sm:w-[20px]"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Mahib09"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <Github
              size={18}
              className="inline mr-1 mb-2 sm:h-[20px] sm:w-[20px]"
            />
            Github
          </a>
          <a
            href="mailto:magarmahib@gmail.com"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            <Mail
              size={18}
              className="inline mr-1 mb-2 sm:h-[20px] sm:w-[20px]"
            />
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
