import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  function countDown() {
    const value = count - 1;
    setCount(value);
  }

  function countUp() {
    const value = count + 1;
    setCount(value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-4xl text-center">
      <button
        className="h-16 w-16 bg-slate-400 hover:bg-slate-300 rounded-l-lg border border-black"
        onClick={countDown}
      >
        -
      </button>
      <div className="h-16 w-32 flex justify-center items-center border-b border-t border-black">
        {count}
      </div>
      <button
        className="h-16 w-16 bg-slate-400 hover:bg-slate-300 rounded-r-lg border border-black"
        onClick={countUp}
      >
        +
      </button>
    </div>
  );
}
