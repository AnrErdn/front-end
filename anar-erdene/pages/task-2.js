import React, { useState } from "react";
import { useRouter } from "next/router"

const useStateTask = () => {
  const [color, setColor] = useState("");
  const router = useRouter();
  return (
    <div className={`grid grid-flow-row gap-2 w-full h-screen ${color ? `bg-${color}-800` : ""}`}>
      <p className="text-center text-3xl cursor-pointer" onClick={() => router.reload("/task-2")}>Өнгө солих:</p>
      <button className="border-4 bg-red-800 text-zinc-800 py-4 px-0 font-bold text-2xl mx-[25%]" onClick={() => setColor("red")}> Улаан өнгө болгох</button>
      <button className="border-4 bg-blue-800 text-zinc-800 py-4 px-0 font-bold text-2xl mx-[25%]" onClick={() => setColor("blue")}> Цэнхэр өнгө болгох</button>
      <button className="border-4 bg-green-800 text-zinc-800 py-4 px-0 font-bold text-2xl mx-[25%]" onClick={() => setColor("green")}> Ногоон өнгө болгох</button>
    </div>
  );
};

export default useStateTask;
