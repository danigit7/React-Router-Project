import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
  const jobsData = useLoaderData()

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {jobsData.map((job) => (
        <Link
          key={job.id}
          to={`/jobs/${job.id}`}
          className="bg-gray-100 p-4 rounded-lg shadow-md w-60 hover:bg-gray-200 transition"
        >
          <h4 className="text-lg font-bold mb-2">{job.title}</h4>
          <p className="text-sm text-gray-700">{job.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Jobs

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if(!res.ok){
     throw Error("Could not find jobs list")
  }
  return res.json()
}