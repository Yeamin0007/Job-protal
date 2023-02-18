import React from 'react';

const ItwdCards = ({w}) => {
    const {location, logo, company} = w
    return (
        <div data-aos="fade-down-left" className="card w-96 h-64 bg-base-100 shadow-xl image-full text-white">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body text-center pt-28">
    <h2 className="text-2xl font-bold">{company}</h2>
<p>{location}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default ItwdCards;