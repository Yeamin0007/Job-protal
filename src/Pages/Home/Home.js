import React from 'react';
import Pros from '../../Shared/Pros/Pros';
import TopItBd from '../../Shared/TopItBd/TopItBd';
import Banner from '../Banner/Banner';
import Extra from '../extra section/Extra';
import Freshers from '../Freshers/Freshers';
import State from '../State/State';
import Togglebtn from '../Togglebtn/Togglebtn';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Togglebtn></Togglebtn>
            <Freshers></Freshers>
            <Extra></Extra>
            <Pros></Pros>
            
            <State></State>
            <TopItBd></TopItBd>
        </div>
    );
};

export default Home;