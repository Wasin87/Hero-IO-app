import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png'
import github from '../../assets/github.png'

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 border-2 border-transparent hover:border-purple-400 hover:text-purple-600 rounded-md px-2 py-1 font-bold">
          Home
        </li>
      </Link>
      <Link to="/apps">
        <li className="m-2 border-2 border-transparent hover:border-purple-400 hover:text-purple-600 rounded-md px-2 py-1 font-bold">
          Apps
        </li>
      </Link>
      <Link to="/installation">
        <li className="m-2 border-2 border-transparent hover:border-purple-400 hover:text-purple-600 rounded-md px-2 py-1 font-bold">
          Installation
        </li>
      </Link>
    </>
  );

    const gitLink = (
      <>
         <Link to="/"><p className="btn btn-ghost text-xl border-transparent text-purple-700 hover:border-purple-400 ">BHERO.IO</p></Link>
      
      </>

    );

  return (
    <div className="navbar bg-base-100 shadow-sm rounded-md px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex'>
          <img className='w-[50px] h-[50px]' src={logoImg} alt="" />
           {gitLink}
        </div>
      </div>
      <div className="navbar-center hidden lg:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
       
       <div className='ml-30'>
             <a href='https://github.com/Wasin87' className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white border-none">
            <img className='w-[30px] h-[30px]' src={github} alt="" /> 
               Contribute
              </a>

        </div>  
        
       
    </div>
  );
};

export default Navbar;





 