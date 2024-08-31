// src/components/Nav.jsx
import React from 'react';
import { FaLessThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-between items-center w-full bg-white p-2'>
      <div className='flex items-center gap-2 text-blue-500'>
        <FaLessThan />
        <Link to="/dashboard">
          <h2 className='text-xl font-semibold'>Home</h2>
        </Link>
      </div>
      <button className='bg-blue-500 text-white py-2 px-4 rounded-md'>Sign Up</button>
    </div>
  );
}

export default Nav;
