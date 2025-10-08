import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
 
import { useLoaderData } from 'react-router-dom';
import HomeData from '../HomeData/HomeData';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
             <Banner></Banner>
             <div className='max-w-5xl mx-auto'>
                <Suspense fallback={"Loading...."}>
                    <HomeData></HomeData>
                </Suspense>
             </div>
              
        </div>
    );
};

export default Home;