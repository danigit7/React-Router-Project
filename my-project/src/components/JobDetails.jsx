import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-xl mx-auto space-y-4 border border-gray-200">
    <p className="text-lg font-semibold text-gray-700">
      <span className="font-bold text-blue-600">Job Title: </span>
      {jobDetails.title}
    </p>
    <p className="text-lg font-semibold text-gray-700">
      <span className="font-bold text-blue-600">Salary: </span>
      {jobDetails.salary}
    </p>
    <p className="text-lg font-semibold text-gray-700">
      <span className="font-bold text-blue-600">Job Location: </span>
      {jobDetails.location}
    </p>
    <p className="text-base text-gray-600 leading-relaxed">
      <span className="block font-bold text-blue-600 mb-1">Job Description:</span>
      We are seeking a skilled and proactive Full Stack Developer to join our team.
      You will be responsible for developing and maintaining both front-end and
      back-end components of our web applications. The ideal candidate should be
      comfortable working with modern frameworks, writing clean code, and
      collaborating with cross-functional teams to deliver high-quality digital
      products.
    </p>  
      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 cursor-pointer">Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if(!res.ok){
    throw Error("Could not find details for the job")
  }
  return res.json();
};
