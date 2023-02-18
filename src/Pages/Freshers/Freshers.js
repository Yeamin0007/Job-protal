import React, { useEffect, useState } from 'react';
import FreshCard from '../../Shared/FreshCard/FreshCard';

const Freshers = () => {
    const [fresher, setFresher] = useState([])
     
   

    useEffect(() =>{
        fetch('freshers.json')
        .then(res=> res.json())
        .then(data => setFresher(data))
    },[])

    return (
        <div className='mt-8 max-w-screen-2xl mx-auto'>
            <div className='my-6'>
                <h2 className=' text-2xl md:text-4xl font-bold text-secondary text-start mt-10 my-4'>Top Jobs For <span className='text-primary'>Freshers</span></h2><hr></hr>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    fresher.map(fresh => <FreshCard
                    key={fresh.id}
                    fresh={fresh}

                    ></FreshCard> )
                }
            </div>
        </div>
    );
};

export default Freshers;