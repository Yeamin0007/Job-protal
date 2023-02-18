import React from 'react';
import { FaDownload, IconName } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://previews.123rf.com/images/everydayplus/everydayplus1707/everydayplus170700051/82978291-resume-and-job-application-on-wood-desk-background-for-job-search-concept.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Get Hired</h1>
      <p className="mb-5">Find Your Dream Job Here. We can also serach top jobs based on your interest and CV. To see what is waiting for you, drop your resume bellow, </p>
      <button className="btn btn-primary">Drop Resume <FaDownload className='pl-2 text-xl'></FaDownload></button>
    </div>
  </div>
</div>
    );
};

export default Banner;