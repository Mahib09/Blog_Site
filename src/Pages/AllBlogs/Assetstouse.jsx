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
        <h1>Assets to use</h1>
        <p className="subtitle">May 8, 2024</p>
        <p>
          These are the collection of assets libraries and websites that I use
          or Refrence for future use.
        </p>
        <div>
          <h2>Lucide React</h2>
          <p className="subtitle">React library for Icons.</p>
          <p>Installation</p>
          <CodeBlock
            text="npm i lucide-react"
            language="javascript"
            theme={dracula}
          />
          <p>Usage</p>
          <CodeBlock text={codeblock1} language="javascript" theme={dracula} />
        </div>
        <div>
          <h2>React Code Block</h2>
          <p className="subtitle">
            React library for making eusable code blocks.
          </p>
          <p>Installation</p>
          <CodeBlock
            text="npm i react-code-blocks"
            language="javascript"
            theme={dracula}
          />
          <p>Usage</p>
          <CodeBlock text={codeblock2} language="javascript" theme={dracula} />
        </div>
        <div>
          <h2>React Player</h2>
          <p className="subtitle">
            A React component for playing a variety of URLs, including file
            paths, YouTube, Facebook, Twitch, SoundCloud...
          </p>
          <p>Installation</p>
          <CodeBlock
            text="npm install react-player"
            language="javascript"
            theme={dracula}
          />
          <p>Usage</p>
          <CodeBlock text={codeblock3} language="javascript" theme={dracula} />
        </div>
      </div>
    </div>
  );
}
