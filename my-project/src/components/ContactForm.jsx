import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 mt-5">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <br />
        <textarea
          placeholder="Message"
          className="p-2 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
