import { CodeBlock, dracula } from "react-code-blocks";

export function Assets() {
  const codeblock1 = ` import {Github} from "lucide-react";
  <Github
  size={18}
  className="inline mr-1 mb-2 sm:h-[20px] sm:w-[20px]"
/>`;
  const codeblock2 = `import { CodeBlock, dracula } from "react-code-blocks";
<CodeBlock
text="npm i react-code-blocks"
language="javascript"
theme={dracula}
/>`;
  const codeblock3 = `import React from 'react'
import ReactPlayer from 'react-player'

<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />`;
  return (
    <div className="container">
      <div className="mt-16">
        <h1 className="text-4xl sm:text-7xl dark:text-white">Assets to use</h1>
        <p className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400">
          May 8, 2024
        </p>
        <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
          These are the collection of assets libraries and websites that I use
          or Refrence for future use.
        </p>
        <div>
          <h2 className="text-2xl sm:text-5xl dark:text-white">Lucide React</h2>
          <p className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400">
            React library for Icons.
          </p>
          <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
            Installation
          </p>
          <CodeBlock
            text="npm i lucide-react"
            language="javascript"
            theme={dracula}
          />
          <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
            Usage
          </p>
          <CodeBlock text={codeblock1} language="javascript" theme={dracula} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-5xl dark:text-white">
            React Code Block
          </h2>
          <p className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400">
            React library for making eusable code blocks.
          </p>
          <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
            Installation
          </p>
          <CodeBlock
            text="npm i react-code-blocks"
            language="javascript"
            theme={dracula}
          />
          <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
            Usage
          </p>
          <CodeBlock text={codeblock2} language="javascript" theme={dracula} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-5xl dark:text-white">React Player</h2>
          <p className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400">
            A React component for playing a variety of URLs, including file
            paths, YouTube, Facebook, Twitch, SoundCloud...
          </p>
          <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
            Installation
          </p>
          <CodeBlock
            text="npm install react-player"
            language="javascript"
            theme={dracula}
          />
          <p className="text-base text-slate-900 mt-2 mb-4 sm:text-xl dark:text-slate-200">
            Usage
          </p>
          <CodeBlock text={codeblock3} language="javascript" theme={dracula} />
        </div>
      </div>
    </div>
  );
}
