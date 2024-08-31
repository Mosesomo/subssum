// src/components/Sidebar.jsx
import React from 'react';
import { MdDashboard, MdElectricBolt, MdOutlineSupportAgent, MdLogout } from "react-icons/md";
import { FaPhoneAlt, FaWifi, FaTv, FaHistory } from "react-icons/fa";
import { RiExchangeFundsFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`fixed h-screen w-64 p-5 text-black rounded-lg shadow-lg transition-transform duration-300 bg-[#EFF3FB] ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className='flex items-center gap-2'>
        <img src={logo} className='object-fit mb-10 w-[20.75px] h-[30.62px]'></img>
        <h1 className="text-xl font-bold mb-10 text-blue-900">SUBSSUM</h1>
      </div>
      <ul>
        <Link to="/dashboard">
          <li className="mb-4">
            <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
              <span className="mr-2"><MdDashboard /></span> Dashboard
              <BiChevronDown className="ml-auto" />
            </p>
          </li>
        </Link>
        <li className="mb-4">
          <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
            <span className="mr-2"><FaPhoneAlt /></span> Buy Airtime
            <BiChevronDown className="ml-auto" />
          </p>
        </li>
        <li className="mb-4">
          <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
            <span className="mr-2"><FaWifi /></span> Buy Data
            <BiChevronDown className="ml-auto" />
          </p>
        </li>
        <li className="mb-4">
          <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
            <span className="mr-2"><FaTv /></span> TV Subscription
            <BiChevronDown className="ml-auto" />
          </p>
        </li>
        <li className="mb-4">
          <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
            <span className="mr-2"><MdElectricBolt /></span> Pay Electric Bill
          </p>
        </li>
        <Link to="/airtimetocash">
          <li className="mb-4">
            <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
              <span className="mr-2"><RiExchangeFundsFill /></span> Airtime to Cash
            </p>
          </li>
        </Link>
        <Link to='/transactions'>
          <li className="mb-4">
            <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
              <span className="mr-2"><FaHistory /></span> Transaction History
            </p>
          </li>
        </Link>
        <li className="mb-4">
          <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
            <span className="mr-2"><MdOutlineSupportAgent /></span> Help & Support
          </p>
        </li>
      </ul>
      <div className='absolute bottom-5'>
        <p className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
          <span className="mr-2"><MdLogout /></span> Logout
          <BiChevronDown className="ml-6" />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
