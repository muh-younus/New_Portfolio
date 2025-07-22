"use client";

import { useState } from "react";

export default function Form({isOpen}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allData, setAllData] = useState([]);
  const [editText, setEditText] = useState(null);

  // Add button
  const handled = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setAllData((newData) => [...newData, { name, email, phone }]);
      resetForm();
    }
  };

  // Delete button
  const deleteButton = (indexToDelete) => {
    setAllData((prev) => prev.filter((_, index) => index !== indexToDelete));
    if (editText === indexToDelete) resetForm();
  };

  // Edit button
  const editButton = (index) => {
    const selected = allData[index];
    setName(selected.name);
    setEmail(selected.email);
    setPhone(selected.phone);
    setEditText(index);
  };

  // Update button
  const updateButton = (e) => {
    e.preventDefault();
    if (name && email && phone && editText !== null) {
      setAllData((prevData) => {
        const updated = [...prevData];
        updated[editText] = { name, email, phone };
        return updated;
      });
      resetForm();
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setEditText(null);
  };

  return (
    <div className={`bg-gradient-to-br  from-slate-900 via-purple-900 to-slate-900 min-h-screen ${isOpen?'w-[1300px]':'w-full'} p-4 sm:p-8 flex flex-col items-center`}>
      {/* Form Section */}
      <div className="flex justify-center items-center w-full max-w-5xl bg-white rounded-lg shadow-xl p-6 sm:p-10 mb-8">
        <form className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between items-start">
          {/* Name */}
          <div className="text-gray-800 flex flex-col gap-2 flex-1 min-w-[150px] w-full md:w-auto">
            <label className="text-xl font-semibold">Name</label>
            <input
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>

          {/* Email */}
          <div className="text-gray-800 flex flex-col gap-2 flex-1 min-w-[150px] w-full md:w-auto">
            <label className="text-xl font-semibold">Email</label>
            <input
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </div>

          {/* Phone */}
          <div className="text-gray-800 flex flex-col gap-2 flex-1 min-w-[150px] w-full md:w-auto">
            <label className="text-xl font-semibold">Phone Number</label>
            <input
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter phone"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {editText === null ? (
              <button
                className="text-lg font-bold rounded-md w-full sm:w-[140px] h-[45px] bg-green-600 mt-8 hover:bg-green-700 text-white transition-colors duration-200"
                onClick={handled}
              >
                Add
              </button>
            ) : (
              <button
                className="text-lg font-bold rounded-md w-full sm:w-[140px] h-[45px] bg-yellow-500 mt-8 hover:bg-yellow-600 text-white transition-colors duration-200"
                onClick={updateButton}
              >
                Update
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl p-6 sm:p-10 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-gray-800">
          <thead>
            <tr className="bg-purple-100 border-b border-gray-300">
              <th className="px-4 py-3 text-left text-lg font-semibold">Name</th>
              <th className="px-4 py-3 text-left text-lg font-semibold">Email</th>
              <th className="px-4 py-3 text-left text-lg font-semibold">Phone Number</th>
              <th className="px-4 py-3 text-left text-lg font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.length === 0 ? (
              <tr className="border-b border-gray-200">
                <td colSpan="4" className="text-center py-4 text-gray-500 text-base">
                  No data available.
                </td>
              </tr>
            ) : (
              allData.map((user, index) => (
                <tr
                  key={index}
                  className="text-center border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-base">{user.name}</td>
                  <td className="px-4 py-3 text-base">{user.email}</td>
                  <td className="px-4 py-3 text-base">{user.phone}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-center flex-wrap gap-2">
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
                        onClick={() => deleteButton(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                        onClick={() => editButton(index)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
