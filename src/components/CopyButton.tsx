import { useState } from "react";
import copy from "copy-to-clipboard";
import { Copy, CheckMark } from "@components/Images";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const [isCopyHovered, setIsCopyHovered] = useState(false);

  const handleCopyClick = (text: string) => {
    copy(text);
    setCopied(true);
    // Reset copied to false after a few seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full p-2 ${
        isCopyHovered
          ? 'bg-[#EEEEEE] dark:bg-purple-taupe'
          : 'bg-[#ffffff] dark:bg-transparent'
      }`}
    >
      {copied ? (
        <CheckMark
          className="cursor-pointer stroke-green-2000"
          onMouseEnter={() => setIsCopyHovered(true)}
          onMouseLeave={() => setIsCopyHovered(false)}
        />
      ) : (
        <Copy
          className="cursor-pointer fill-none"
          onClick={() => {
            handleCopyClick(text);
          }}
          onMouseEnter={() => setIsCopyHovered(true)}
          onMouseLeave={() => setIsCopyHovered(false)}
        />
      )}
    </div>
  );
}