import React, { useState } from "react";

const useStateTask = () => {
  const [color, setColor] = useState("");

  return (
    <div className={`grid grid-flow-row gap-2 w-full h-screen ${color ? `bg-${color}-800` : ""}`}>
      <p className="text-center text-3xl">Өнгө солих:</p>
      <button className="border-4 text-red-800 bg-zinc-800 py-4 px-0 font-bold text-2xl mx-[25%]" onClick={() => setColor("red")}> Улаан өнгө болгох</button>
      <button className="border-4 text-blue-800 bg-zinc-800 py-4 px-0 font-bold text-2xl mx-[25%]" onClick={() => setColor("blue")}> Цэнхэр өнгө болгох</button>
      <button className="border-4 text-green-800 bg-zinc-800 py-4 px-0 font-bold text-2xl mx-[25%]" onClick={() => setColor("green")}> Ногоон өнгө болгох</button>
    </div>
  );
};

export default useStateTask;
