import axios from "axios";
import { useState } from "react";

export default function Post() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = () => {
        axios.post("http://localhost:3000/createUser", {
            firstName: firstName,
            lastName: lastName,
        });
    }

    console.log(firstName, lastName);

    return (
        <>
            <div className="space-y-8">
                <header className="flex space-x-6 mt-6">
                    <div className="text-yellow-500 text-3xl font-bold">POST PAGE:</div>
                    <button className="bg-yellow-800 text-white pr-4 pl-4 pt-2 pb-2 rounded-3xl">Create users</button>
                </header>
                <main className="space-y-4">
                    <div className="text-2xl">
                        <label>First name:</label>
                        <input 
                            type="text" 
                            className="border rounded-lg bg-white text-black ml-6" 
                            placeholder="Write your first name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}>
                        </input>
                    </div>
                    <div className="text-2xl">
                        <label>Last name:</label>
                        <input 
                            type="text" 
                            className="border rounded-lg bg-white text-black ml-6" 
                            placeholder="Write your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}>
                        </input>
                    </div>
                    <button 
                        className="bg-lime-500 rounded-md px-4 py-2 text-white"
                        onClick={handleSubmit}>
                        Save
                    </button>
                </main>
            </div>
        </>
    );
}   