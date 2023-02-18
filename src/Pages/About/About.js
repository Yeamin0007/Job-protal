import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-white">
            
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://img.freepik.com/free-vector/illustration-concept-with-multitasking_52683-30925.jpg" alt='' className=" lg:max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-secondary">Welcome to Workin...</h1>
            <p className="py-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            
           <div className='flex justify-evenly'> <div className='text-3xl font-bold text-secondary'>
                <p>12k+</p>
                <p>Current Users</p>
            </div>
            <div className='text-3xl font-bold text-secondary'>
                <p>8k+</p>
                <p>People Hired</p>
            </div></div>
          </div>
        </div>
      </div>
    );
};

export default About;