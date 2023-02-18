import React from 'react';

const ItbdCard = ({b}) => {
    const {location, logo, company} = b
    return (
        <div data-aos="fade-down-right" className="card w-96 h-64 bg-base-100 shadow-xl image-full ">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body  text-center text-gray-600 pt-28">
          <h2 className="text-2xl font-bold">{company}</h2>
      <p>{location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default ItbdCard;