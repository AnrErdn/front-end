import React, { useState } from "react";

export default function OnChange() {
    const [search, setSearch] = useState("");

    console.log(search);

    return (
        <div className="space-y-5 text-bold text-6xl absolute top-[30%] left-[30%]">
            <input className="text-gray-700" type="search" onChange={(e) => setSearch(e.target.value)} />
            <p>search: {search}</p>
        </div>
    );
}