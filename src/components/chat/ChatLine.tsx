import clsx from "clsx";
import Balancer from "react-wrap-balancer";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

import convertNewLines from "@helpers/convert-new-lines";
import CopyButton from "@components/CopyButton";
import { MESSAGE_TYPE, ChatGPTAgent } from "@types";

import classes from "./ChatLine.module.css";

interface Props {
  role: ChatGPTAgent
  content: string
  type: MESSAGE_TYPE
}

const BalancerWrapper = (props: any) => <Balancer {...props} />

export const LoadingChatLine = () => ( // carrega animação placeholder
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900">
          <BalancerWrapper>
            Supply Pharma
          </BalancerWrapper>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
)

export const ChatLine: React.FC<Props> = ({ role='assistant', content, type }: Props): JSX.Element => {
  let formatteMessage: any = null;
  
  if (!content) {
    return (
      <></>
    );
  }
  
  formatteMessage = convertNewLines(content);

  return (
    <div
      className={
        role !== 'assistant' ? 'float-right clear-both' : 'float-left clear-both'
      }
    >
      <div className="float-right mb-5 rounded-lg bg-white px-4 py-5 shadow-lg ring-1 ring-zinc-100 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-1 gap-4">
            <p
              className={clsx(
                'text ',
                role === 'assistant' ? 'font-semibold font- ' : 'text-gray-400'
              )}
            >
              {type === 'QUESTION' ? (
                <ReactMarkdown className="whitespace-pre-wrap break-normal leading-normal">
                  {formatteMessage}
                </ReactMarkdown>
              ) : (
                <ReactMarkdown
                  className="whitespace-pre-wrap break-normal leading-normal"
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');

                      return !inline && match ? (
                        <div className="group relative">
                          <SyntaxHighlighter
                            PreTag="div"
                            language={match[1]}
                            {...props}
                            style={vscDarkPlus}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                          <div
                            className={`absolute right-3 top-3 lg:invisible 
                            ${type !== 'ERROR' ? 'group-hover:lg:visible' : ''} `}
                          >
                            <CopyButton text={String(children).replace(/\n$/, '')} />
                          </div>
                        </div>
                      ) : (
                        <code className={className ? className : ''} {...props}>
                          {children}
                        </code>
                      );
                    },
                    ul({ children }) {
                      return (
                        <ul
                          className={`list-inside list-disc whitespace-normal pl-4 ${classes.list}`}
                        >
                          {children}
                        </ul>
                      );
                    },
                    ol({ children }) {
                      return (
                        <ol
                          className={`list-inside list-decimal whitespace-normal pl-4 ${classes.list}`}
                        >
                          {children}
                        </ol>
                      );
                    },
                    table({ children }) {
                      return (
                        <div className="relative overflow-x-auto rounded-lg border">
                          <table className="w-full text-left text-sm text-gray-700">
                            {children}
                          </table>
                        </div>
                      );
                    },
                    thead({ children }) {
                      return (
                        <thead className="text-xs uppercase text-gray-900 [&>.table-row]:bg-gray-50">
                          {children}
                        </thead>
                      );
                    },
                    tr({ children }) {
                      return (
                        <tr className="table-row border-b odd:bg-white even:bg-gray-50">
                          {children}
                        </tr>
                      );
                    },
                    td({ children }) {
                      return <td className="px-6 py-3">{children}</td>;
                    },
                    th({ children }) {
                      return <th className="px-6 py-3">{children}</th>;
                    },
                  }}
                >
                  {formatteMessage}
                </ReactMarkdown>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}