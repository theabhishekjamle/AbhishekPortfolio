"use client";

import React, { useState } from "react";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponse(data.message || data.error);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setResponse("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="contact">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Contact
      </h1>
      <div className="w-full flex flex-col items-center justify-center px-10">
        <form className="w-full max-w-lg flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-[#7042f88b] text-gray-200 
                focus:outline-none focus:border-purple-500 transition-colors
                hover:border-purple-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-[#7042f88b] text-gray-200 
                focus:outline-none focus:border-purple-500 transition-colors
                hover:border-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-200">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-[#7042f88b] text-gray-200 h-32 
                focus:outline-none focus:border-purple-500 transition-colors
                hover:border-purple-500"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold
              py-3 px-6 rounded-lg hover:opacity-90 transition-opacity
              transform hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>

          {response && (
            <p className="text-center text-white mt-4">{response}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contacts;