import React from 'react';
import logoImg from '../../assets/logo.png'
const Footer = () => {
  return (

      <div>
        <div className='flex gap-2 bg-black text-white hover:text-purple-600 px-9 py-5'>
        
        <img className='w-[30px] h-[30px]' src={logoImg} alt="" />
        <p className="font-bold text-xl">BHERO.IO</p>
        </div>
      
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 -mt-8">

      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
        <div className='flex gap-2 bg-black text-gray-300 justify-center items-center py-5'>
         
            <p>Copyright © 2025 - All right reserved</p>
        </div>
        </div>
  );
};

export default Footer;
