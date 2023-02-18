import React from 'react';
import { Link } from 'react-router-dom';


const ProCard = ({p}) => {
    const {position, location, company, logo} = p
    return (
//         <div className='mb-8'>
//         <div className="card w-96 h-80 bg-blend-lighten shadow-xl">
        
            
// <figure className="px-10 mt-10">
// <div className="avatar">
// <div className="w-24 mask mask-hexagon">
// <img src={logo} alt='' />
// </div>
// </div>
// </figure>

// <div className="card-body items-center text-center">
// <h2 className='text-2xl'>{position}</h2>
// <p>{location}</p>
// <p className='font-bold'>{company}</p>
// <div className="card-actions">
//   <button className="btn btn-primary">Apply Now</button>
// </div>

// </div>
// </div>
//     </div>
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
      <div className="badge badge-secondary">Skilled</div>
    </h2>
    <p>{location}</p>
    <p className='font-bold'>{company}</p>
    <div className="flex justify-center items-center ">
   <Link to='/apply'><button className="btn btn-primary">Apply Now</button></Link>
 </div>
  </div>
</div>
    );
};

export default ProCard;