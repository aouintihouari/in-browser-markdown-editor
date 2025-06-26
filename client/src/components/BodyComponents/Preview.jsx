import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const Preview = ({ showMarkdown, tempDocumentContent, selectedDocument }) => {
  const content = tempDocumentContent || selectedDocument?.content || "";

  const baseClass =
    "h-full overflow-y-auto bg-white dark:bg-gray-900 duration-300";

  return (
    <div
      className={`${baseClass} ${showMarkdown ? "w-[50%]" : "ml-auto flex justify-center"}`}
    >
      {content ? (
        <div
          className={`${showMarkdown ? "" : "md:w-[60%]"} prose prose-neutral dark:prose-invert min-h-full max-w-none p-8 pb-20`}
        >
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              p: ({ node, ...props }) => (
                <p
                  className="p my-3 text-gray-400 dark:text-gray-300"
                  {...props}
                />
              ),
              pre: ({ node, ...props }) => (
                <pre
                  className="mb-6 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
                  {...props}
                />
              ),
              h1: ({ node, ...props }) => (
                <h1
                  className="h1 my-2 text-gray-600 dark:text-white"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="h2 my-2 text-gray-600 dark:text-white"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="h3 my-2 text-gray-600 dark:text-white"
                  {...props}
                />
              ),
              h4: ({ node, ...props }) => (
                <h4
                  className="h4 my-2 text-gray-600 dark:text-white"
                  {...props}
                />
              ),
              h5: ({ node, ...props }) => (
                <h5
                  className="h5 my-2 text-gray-600 dark:text-white"
                  {...props}
                />
              ),
              h6: ({ node, ...props }) => (
                <h6 className="h6 text-accent-primary my-2" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="marker:text-accent-primary my-4 list-inside list-disc space-y-2 pl-4"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="my-4 list-inside list-decimal space-y-2 pl-4"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li
                  className="p leading-relaxed text-gray-400 dark:text-gray-300"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-accent-primary p-bold my-6 rounded-r-lg border-l-4 bg-gray-100 py-3 pl-4 text-gray-800 dark:bg-gray-700 dark:text-white"
                  {...props}
                />
              ),
              code: ({ node, inline, className = "", children, ...props }) => {
                return inline ? (
                  <code className="p-bold rounded bg-gray-200 px-1 py-0.5 font-mono text-sm text-orange-600 dark:bg-gray-700 dark:text-white">
                    {children}
                  </code>
                ) : (
                  <code className="font-mono text-sm whitespace-pre text-gray-800 dark:text-gray-200">
                    {children}
                  </code>
                );
              },
              a: ({ node, ...props }) => (
                <a
                  className="p-bold text-gray-800 underline dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              hr: () => (
                <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />
              ),
            }}
          />
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
              No content to preview
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Start typing in the editor to see a live preview
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
