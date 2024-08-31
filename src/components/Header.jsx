// src/components/Nav.jsx
import React from 'react';
import { MdNotificationsNone } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";



const Header = () => {
  return (
    <div className='flex justify-end w-full bg-white'>
      <div className='flex gap-2 items-center'>
        <p className='font-semibold text-blue-500 cursor-pointer'>Upgrade To Merchant</p>
        <MdNotificationsNone size={24} className='text-blue-500 cursor-pointer'/>
        <VscAccount size={24} className='text-blue-500 cursor-pointer'/>
      </div>
    </div>
  );
}

export default Header;
