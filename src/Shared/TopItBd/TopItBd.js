import React, { useEffect, useState } from 'react';
import ItbdCard from '../Itbd/ItbdCard';
import ItwdCards from '../Itbd/ItwdCards';

const TopItBd = () => {
    const [bd, setBd] = useState([])
    const [wd, setWd] = useState([])

    useEffect(() =>{
        fetch('bdit.json')
        .then(res=> res.json())
        .then(data => setBd(data))
    },[])
    useEffect(() =>{
        fetch('worldit.json')
        .then(res=> res.json())
        .then(data => setWd(data))
    },[])
    return (
        <div className='mt-8 max-w-screen-2xl mx-auto'>
        <div className='my-6'>
            <h2 className=' text-2xl md:text-3xl font-semibold text-secondary text-start py-4 pt-10'>Top IT Companies in <span className='text-rose-800'>Bangladesh</span></h2><hr></hr>
        </div>
        <div  className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                bd.map(b => <ItbdCard
                key={b.id}
                b={b}
                ></ItbdCard>)
            }
        </div>
        <div className='my-6'>
            <h2 className=' text-2xl md:text-3xl font-semibold text-secondary text-start py-4 pt-10'> Top IT Companies in The <span className='text-rose-800'>World</span></h2><hr></hr>
        </div>
        <div  className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
            {
                wd.map(w => <ItwdCards
                key={wd.id}
                w={w}
                ></ItwdCards>)
            }
        </div>
    </div>
    );
};

export default TopItBd;