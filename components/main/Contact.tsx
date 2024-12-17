import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Contacts = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact
      </h1>
      <div className="h-full w-full flex flex-col items-center justify-center px-10">
        <form className="w-full max-w-lg flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-200">Name</label>
            <input 
              type="text"
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
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-[#7042f88b] text-gray-200
                focus:outline-none focus:border-purple-500 transition-colors
                hover:border-purple-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-200">Message</label>
            <textarea
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-[#7042f88b] text-gray-200 h-32
                focus:outline-none focus:border-purple-500 transition-colors
                hover:border-purple-500"
              placeholder="Enter your message"
            />
          </div>

          <button 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold
              py-3 px-6 rounded-lg hover:opacity-90 transition-opacity
              transform hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
