import React, { useEffect, useState } from 'react';
import ProCard from '../ProCard/ProCard';

const Pros = () => {
    const [pro, setPro] = useState([])

    useEffect(() =>{
        fetch('pros.json')
        .then(res=> res.json())
        .then(data => setPro(data))
    },[])

    return (
        <div className='mt-8 max-w-screen-2xl mx-auto'>
        <div className='my-6'>
            <h2 className=' text-2xl md:text-4xl font-bold text-secondary text-start mt-10 my-4'> Our Top Jobs For <span className='text-primary'>Professionals</span></h2><hr></hr>
        </div>
        <div  className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                pro.map(p => <ProCard
                key={p.id}
                p={p}
                ></ProCard>)
            }
        </div>
    </div>
    );
};

export default Pros;