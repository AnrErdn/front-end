import axios from "axios";
import { useState } from "react";

export default function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState({ firstName: "", lastName: "" });

    const handleSubmit = async () => {
        const newErrors = { firstName: "", lastName: "" };

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        if (newErrors.firstName || newErrors.lastName) {
            setErrors(newErrors);
            return;
        }

        try {
            await axios.post("http://localhost:8080/createUsers", {
                first_name: firstName,
                last_name: lastName,
                email: email,
                age: age,
            });
            alert("User created successfully!");
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">
                <h1 className="text-2xl font-semibold text-gray-700">Create Account</h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your first name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                setErrors(prev => ({ ...prev, firstName: "" }));
                            }}
                            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 text-black ${
                                errors.firstName
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-yellow-500"
                            }`}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your last name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                setErrors(prev => ({ ...prev, lastName: "" }));
                            }}
                            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 text-black ${
                                errors.lastName
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-yellow-500"
                            }`}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-medium transition duration-200"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
