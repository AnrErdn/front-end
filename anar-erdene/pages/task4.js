import { useState } from "react";

export default function Task4() {
    const [grid, setGrid] = useState(true);

    return (
        <div className="mx-auto max-x-4xl p-10 bg-white h-screen">
            <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl text-black font-bold">Нийтлэлүүд</h1>
                    <button className="text-white rounded-md bg-cyan-500 py-2 px-4" >Grid View-рүү шилжүүлэх </button>
            </div>
        </div>
    );
};