import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate();

  return (
    <div>
        <h3>An error occured.</h3>
        <p>{error.message}</p>
        <button  className="bg-black text-white px-2 py-1 rounded hover:bg-gray-600 cursor-pointer" onClick={() => navigate("/")}>Go back to homepage</button>
    </div>
  )
}

export default Error