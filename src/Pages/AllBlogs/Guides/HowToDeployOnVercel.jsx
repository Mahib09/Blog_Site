import { CodeBlock, dracula } from "react-code-blocks";
export default function HowToDeployOnVercel() {
  const verceljsoncode = `{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
`;
  const packagescript = `"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}`;
  return (
    <div className="container">
      <h1>Deploy Vite+React Application via Vercel</h1>
      <p className="subtitle">May 28, 2024</p>
      <p>
        A brief guide on how to deploy your vite+react app on vercel with custom
        domain
      </p>
      <h2>Create your Vite+React Application</h2>
      <p>You should have a application made ready to deploy.</p>
      <h2>Create a vercel account</h2>
      <p>
        After you have finished your application development you have to create
        a vercel account which you can do via{" "}
        <a href="https://vercel.com/signup" className="text-blue-700">
          this link
        </a>{" "}
        where you can choose hobby plan type which is the free option and add
        your name. <br></br>Then you can continue with email or any other
        option, but I recommend doing with github because you will eventually
        have to setup your github.
      </p>
      <h2>SetupYour Files</h2>
      <p>
        <strong>Step 1:</strong>
      </p>
      <p>
        Now as you have a vercel account you have to create a vercel.json file
        on the root of your folder with the following code:
      </p>
      <CodeBlock text={verceljsoncode} language="javascript" theme={dracula} />
      <p>
        This helps you setup your routing links properly, if not added you will
        get 404 page not found error if you want to visit any of your links for
        SPAs.
      </p>
      <p>
        <strong>Step 2:</strong>
      </p>
      <p>
        Following step 1, Now you have to add following script to you
        package.json file that you can find on the root of your folder
      </p>
      <CodeBlock text={packagescript} language="javascript" theme={dracula} />
    </div>
  );
}
