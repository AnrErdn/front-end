import axios from "axios";
import { useState } from "react";

export default function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
    });

    const handleSubmit = async () => {
        const newErrors = { firstName: "", lastName: "", email: "", age: "" };

        if (!firstName.trim()) newErrors.firstName = "First name is required.";
        if (!lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!email.trim()) newErrors.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email.";
        if (!age.trim()) newErrors.age = "Age is required.";
        else if (isNaN(Number(age)) || Number(age) <= 0)
            newErrors.age = "Enter a valid age.";

        if (Object.values(newErrors).some((error) => error !== "")) {
            setErrors(newErrors);
            return;
        }

        try {
            await axios.post("http://localhost:8080/createUsers", {
                first_name: firstName,
                last_name: lastName,
                email: email,
                age: Number(age),
            });
            alert("User created successfully!");
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const inputClass = (hasError) =>
        `w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 text-black ${
            hasError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-yellow-500"
        }`;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6">
                <h1 className="text-2xl font-semibold text-gray-700">Create Account</h1>

                <div className="space-y-4">
                    {/* First Name */}
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
                                setErrors((prev) => ({ ...prev, firstName: "" }));
                            }}
                            className={inputClass(!!errors.firstName)}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    {/* Last Name */}
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
                                setErrors((prev) => ({ ...prev, lastName: "" }));
                            }}
                            className={inputClass(!!errors.lastName)}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors((prev) => ({ ...prev, email: "" }));
                            }}
                            className={inputClass(!!errors.email)}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Age
                        </label>
                        <input
                            type="number"
                            placeholder="Your age"
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                                setErrors((prev) => ({ ...prev, age: "" }));
                            }}
                            className={inputClass(!!errors.age)}
                        />
                        {errors.age && (
                            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
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
