import React from 'react';

const Togglebtn = () => {
    return (
        <div className="btn-group my-20 ">
  <input type="radio" name="options" data-title="Find Job" className="btn px-11" checked/>
  
  <input type="radio" name="options" data-title="Post Job" className="btn px-11" />
</div>
    );
};

export default Togglebtn;