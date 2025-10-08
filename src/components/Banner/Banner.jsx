import React from 'react';
import heroImg from '../../assets/hero.png'
import play from '../../assets/Play.png'
import app from '../../assets/App.png'

const Banner = () => {
  return (
    <div>
       <div className='max-w-5xl mx-auto'>
           <div className=' mt-6'>
            <h1 className='text-3xl font-bold flex justify-center items-center'>We Build </h1>
            <h1 className='text-3xl font-bold flex justify-center items-center gap-2'> <span className='text-purple-600'>Productive </span> Apps</h1>
          </div>
     <div className='mt-5'>
       <p className='flex justify-center items-center text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
        <p className='flex justify-center items-center text-gray-500'>Our goal is to turn your ideas into digital experiences that truly make an impact.</p> 
     </div>

        <div className='flex justify-center items-center gap-3 mt-5'>
          <button className='btn'><span> <img className='w-[30px] h-[30px]' src= {play} alt="" /> </span>Google Play</button>
          <button className='btn'><span> <img className='w-[30px] h-[30px]' src= {app} alt="" /> </span>App Store</button>
        </div>

        <div className='flex justify-center items-center mt-5'>
          <img className='w-[420px] h-[230px]' src= {heroImg} alt="" />
        </div>
       </div>

       <div className='bg-gradient-to-r from-purple-800 to-purple-500 text-white border-none px-3 py-10'>
           <div className='flex justify-center items-center'>
              <h1 className='font-bold text-2xl'>Trusted by Millions, Built for You</h1>
           </div>
           <div className='flex justify-around mt-5'>
               <div >
                   <p className='flex justify-center items-center text-gray-200'>Total Downloads</p>
                   <h1 className='text-2xl font-bold flex justify-center items-center'>29.6M</h1>
                   <p className='flex justify-center items-center text-gray-200'>21% more than last month</p>
               </div>
               <div >
                   <p className='flex justify-center items-center text-gray-200'>Total Reviews</p>
                   <h1 className='text-2xl font-bold flex justify-center items-center'>906K</h1>
                   <p className='flex justify-center items-center text-gray-200'>46% more than last month</p>
               </div>
               <div >
                   <p className='flex justify-center items-center text-gray-200'>Active Apps</p>
                   <h1 className='text-2xl font-bold flex justify-center items-center'>132+</h1>
                   <p className='flex justify-center items-center text-gray-200'>31 more will Launch</p>
               </div>
           </div>
       </div>

    </div>
      

  );
};

export default Banner;
