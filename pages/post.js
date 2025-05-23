import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function CreateAccount() {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getUsers");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to load users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async () => {
    const newErrors = { firstName: "", lastName: "", email: "", age: "" };

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email.";
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
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      loadUsers();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:8080/deleteUser/${userId}`);
      loadUsers(); // Refresh list after deletion
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/updateUser/${editUserId}`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        age: Number(age),
      });
      alert("User updated successfully!");
      resetForm();
      loadUsers();
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong while updating.");
    }
  };

  const handleEdit = (user) => {
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setAge(String(user.age));
    setEditUserId(user.id);
    setIsEditing(true);
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setEditUserId(null);
    setIsEditing(false);
    setErrors({ firstName: "", lastName: "", email: "", age: "" });
  };


  const inputClass = (hasError) =>
    `w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 text-black ${
      hasError
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-yellow-500"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Register Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-6">
          <h1 className="text-2xl font-semibold text-gray-700">
            {isEditing ? "Edit User" : "Create Account"}
          </h1>

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
              onClick={() => isEditing === true ? handleUpdate() : handleSubmit()}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-medium transition duration-200"
            >
              Save
            </button>
          </div>
        </div>

        {/* Right: Users List */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-black">Users List</h2>
          {users.length === 0 ? (
            <p className="text-gray-500">No users yet.</p>
          ) : (
            <ul className="space-y-2">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-3 border rounded-md shadow-sm bg-gray-100 space-y-1"
                >
                  <p className="text-gray-500">
                    <strong>Name:</strong> {user.first_name} {user.last_name}
                  </p>
                  <p className="text-gray-500">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-gray-500">
                    <strong>Age:</strong> {user.age}
                  </p>
                 <div className="space-x-2 mt-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
