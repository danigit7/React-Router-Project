import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>404 | Page not Found</h2>
      <br />
      <button
        onClick={() => navigate("/")}
        className="text-1xl bg-black text-white border-11 border-black rounded-2xl cursor-pointer"
      >
        Go to homepage
      </button>
    </div>
  );
};

export default NotFound;
