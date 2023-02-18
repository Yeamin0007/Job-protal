import React from 'react';
import { Link } from 'react-router-dom';

const FreshCard = ({fresh}) => {
    const {position, location, company, logo} = fresh
    return (
      <div data-aos="zoom-in-down" className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 mt-10">
      <div className="avatar">
      <div className="w-24 mask mask-hexagon">
      <img src={logo} alt='' />
      </div>
      </div>
      </figure>
       <div className="card-body text-start">
         <h2 className="card-title justify-between">
           {position}
           <div className="badge bg-green-400 text-white border-none">Intern</div>
         </h2>
         <p>{location}</p>
         <p className='font-bold'>{company}</p>
         <div className="flex justify-center items-center ">
        <Link to='/apply'><button className="btn-md rounded-lg btn-primary">Apply Now</button></Link>
      </div>
       </div>
     </div>
    );
};

export default FreshCard;