import React from 'react';
import { FaHome, FaMailBulk, FaMobileAlt } from "react-icons/fa";

const Contract = () => {
    return (
        // <div>
        //     <div>
        //         <h2 className='text-2xl md:text-4xl'>Get in Touch</h2>
        //     </div>
        //     <div>
        //         <div>
        //         <div className="form-control">
        //         <textarea className="textarea textarea-bordered h-24" placeholder="Your Messege"></textarea>
        //         </div>
        //         <div className='flex justify-around'>
        //         <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
        //         <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        //         </div>
        //         </div>


        //         <div></div>
        //     </div>
        // </div>
        <div className="hero min-h-screen bg-base-100">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
      <div className="card-body">
      <h1 className="text-4xl font-bold mb-5 text-primary ">Contact</h1>
      
        <div className="form-control">
          
          <input type="text" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" placeholder="Email" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          
        <textarea className="textarea textarea-bordered" placeholder="Messege"></textarea>
          
        </div>
        <div className=" mt-6">
          <button className="btn btn-outline btn-primary">Send Messege</button>
        </div>
      </div>
    </div>


    <div className="text-center lg:text-left ">
    <h1 className="text-4xl font-bold mb-5 ">GET IN TOUCH</h1>
    
    <p>Our Support Section is always there for your. Fell free to contact us for any kind of information. You can also visit our office at working hour.</p>
      <div className='flex my-8'>
        <FaHome className='text-4xl mx-5'></FaHome>
        <div>
            <p>Dhanmondi, Dhaka</p>
            <p>Road-15, House-21</p>
        </div>

      </div>
      <div className='flex my-8'>
        <FaMobileAlt className='text-4xl mx-5'></FaMobileAlt>
        <div>
            <p>+880XXXXXXXXXX</p>
            <p>Mon to Fri (6am to 8pm)</p>
        </div>

      </div>
      <div className='flex my-8'>
        <FaMailBulk className='text-4xl mx-5'></FaMailBulk>
        <div>
            <p>support@workin.com</p>
            <p>Send us your query anytime!</p>
        </div>

      </div>
    </div>
  </div>
</div>
    );
};

export default Contract;