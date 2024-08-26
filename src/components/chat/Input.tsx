import { Button } from "./Button";
import SpinnerDark from "@assets/images/spinner-dark.svg";
import Spinner from "@assets/images/spinner.svg";

export const InputMessage = ({ inputRef, handleInput, handleQuestionSubmission, isLoading, darkTheme=false }: any) => (
  <div className="flex w-full items-center rounded-[40px] border border-silver bg-white py-1 dark:bg-raisin-black">
    <textarea
      id="inputbox"
      ref={inputRef}
      aria-label="chat input"
      tabIndex={1}
      placeholder="Digite sua mensagem..."
      required
      className={`inputbox-style min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm`}
      onInput={handleInput}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleQuestionSubmission();
        }
      }}
    >
      {inputRef.current.value}
    </textarea>
    {isLoading === 'loading' ? (
      <img
        src={darkTheme ? SpinnerDark : Spinner}
        className="relative right-[38px] bottom-[24px] -mr-[30px] animate-spin cursor-pointer self-end bg-transparent"
      ></img>
    ) : (
      <div className="mx-1 cursor-pointer rounded-full p-3 text-center hover:bg-gray-3000 dark:hover:bg-dark-charcoal">
        <Button
          type="submit"
          className="ml-4 flex-none"
          darkTheme={darkTheme}
          onClick={() => {
            handleQuestionSubmission();
          }}
        >
          Enviar
        </Button>
      </div>
    )}
  </div>
);