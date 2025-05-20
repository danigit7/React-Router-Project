import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <div>
        <button
          onClick={() => navigate("info")}
          className="flex items-center justify-center w-full pb-5 gap-5 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700 transition cursor-pointer px-6 mt-4"
        >
          Contact Info
        </button>
        <button
          onClick={() => navigate("form")}
          className="flex items-center justify-center w-full pb-5 gap-5 bg-blue-600 text-white border border-blue-700 rounded-lg hover:bg-blue-700 transition cursor-pointer px-6 mt-4"
        >
          Contact Form
        </button>
      </div>
    </div>
  );
};

export default Contact;
