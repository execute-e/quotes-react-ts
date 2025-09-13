import React from "react";
import { useQuote } from "./useQuote";

const Quote: React.FC = () => {
  const { randomQuote, error, refetch, isFetching } = useQuote();

  const handleClick = () => {
    refetch();
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <article className="bg-gray-500 p-5 w-[100%] rounded-2xl flex flex-col gap-y-5 my-5">
      <div className="flex flex-col gap-y-4">
        <h2
          className={
            `transition-opacity text-lg text-white` +
            (isFetching ? " opacity-70" : "")
          }
        >
          {randomQuote?.text}
        </h2>
        <h3
          className={
            `transition-opacity text-base text-white` +
            (isFetching ? " opacity-70" : "")
          }
        >
          {randomQuote?.author}
        </h3>
      </div>
      <button
        disabled={isFetching}
        className="transition-all disabled:cursor-default disabled:opacity-70 bg-emerald-200 rounded-md p-2 self-start hover:bg-emerald-300 cursor-pointer active:bg-emerald-400"
        onClick={handleClick}
      >
        Random quote
      </button>
    </article>
  );
};

export default Quote;
