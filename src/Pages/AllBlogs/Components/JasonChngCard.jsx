import { CodeBlock, dracula } from "react-code-blocks";
export function JCCard() {
  const codeblock1 = `export function ECard(props) {
  let height = props.height;
  let width = props.width;
  return (
    <>
      <div>
        <div
          className="flex content-center wrap ml-10 mt-5 mb-2 h-[var(--height)] w-[var(--width)]
           bg-white border rounded-md shadow-lg hover:shadow-2xl transition-shadow ease-in-out "
          style={{ "--height": height, "--width": width }}
        >
          <img src={props.src} className="object-contain"></img>
        </div>
        <div
          className="ml-10 flex w-[var(--width)]"
          style={{ "--height": height, "--width": width }}
        >
          <div>
            <h2>{props.title}</h2>
            <h2 className="text-gray-400 font-semibold">{props.subtitle}</h2>
          </div>
          <p className="ml-auto text-gray-400 text-sm">{props.year}</p>
        </div>
      </div>
    </>
  );
}
`;
  return (
    <div className="container">
      <div className="mt-16">
        <h1>Jason Chang&apos;s Simple Card Component</h1>
        <p className="text-base text-gray-500 mt-2 mb-4 sm:text-lg dark:text-neutral-400">
          May 10, 2024
        </p>
        <p>
          This is a recreation of a card component by
          <a href="https://www.ethanchng.com/" className="font-bold">
            {" "}
            Ethan Chang
          </a>
          , which I was introduced to via instagram and caught my eye which made
          me think oh that&apos;s cool, I can use it in my sites and we are
          here.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center justify-center">
          <div>
            <div className="flex content-center wrap ml-10 mt-5 mb-2 h-[250px] w-[250px] bg-white border rounded-md shadow-lg hover:shadow-2xl transition-shadow ease-in-out dark:shadow-gray-500"></div>
            <div className="ml-10 flex w-[250px]">
              <div>
                <p className="text-base mt-2 dark:text-white">Title</p>
                <p className="text-gray-400 font-semibold text-base mt-0">
                  subtitle here
                </p>
              </div>
              <p className="ml-auto text-gray-400 text-sm">2024</p>
            </div>
          </div>
          <div>
            <div className="flex content-center wrap ml-10 mt-5 mb-2 h-[250px] w-[250px] bg-white border rounded-md shadow-lg hover:shadow-2xl transition-shadow ease-in-out dark:shadow-gray-500"></div>
            <div className="ml-10 flex w-[250px]">
              <div>
                <p className="text-base mt-2 dark:text-white">Title</p>
                <p className="text-gray-400 font-semibold text-base mt-0">
                  subtitle here
                </p>
              </div>
              <p className="ml-auto text-gray-400 text-sm">2024</p>
            </div>
          </div>
        </div>

        <p>Source Code</p>
        <CodeBlock text={codeblock1} language="javascript" theme={dracula} />
      </div>
    </div>
  );
}
