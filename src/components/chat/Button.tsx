import clsx from "clsx";
import Send from "@assets/images/send.svg";
import SendDark from "@assets/images/send_dark.svg";

export function Button({ className, darkTheme, ...props }: any) {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        'bg-zinc-600 font-semibold text-zinc-100 hover:bg-zinc-400 active:bg-zinc-800 active:text-zinc-100/70',
        className
      )}
      src={darkTheme ? SendDark : Send}
      {...props}
    />
  );
}