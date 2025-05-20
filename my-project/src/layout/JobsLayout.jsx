import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-4 text-center">Jobs Openings</h2>
        <p className="mb-4 text-center">List of current job opening in our company.</p>
        <Outlet />
    </div>
  )
}

export default JobsLayout 