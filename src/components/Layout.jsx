import React from 'react';
import LoginForm from './LoginForm';
import Nav from './Nav';
import { MdDashboard, MdElectricBolt, MdOutlineSupportAgent, MdSpaceDashboard } from "react-icons/md";
import { FaPhoneAlt, FaWifi, FaTv, FaHistory } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import logo from '../assets/logo.png';

const Layout = () => {
  return (
    <div className='flex w-[100%]'>
        <div className='hidden md:block fixed h-screen bg-gradient-to-b from-blue-700 to-blue-400  pl-5 pt-5 pb-5'>
            <div className=" bg-white h-full w-64 p-5 text-black rounded-lg shadow-lg">
                <div className='flex items-center gap-2'>
                    {/*<MdSpaceDashboard size={38} className='mb-10'/>*/}
                    <img src={logo} className='object-fit mb-10'></img>
                    <h1 className="text-xl font-bold mb-10">SUBSUM</h1>
                </div>
                <ul>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><MdDashboard /></span> Dashboard
                            <BiChevronDown className="ml-auto" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><FaPhoneAlt /></span> Buy Airtime
                            <BiChevronDown className="ml-auto" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><FaWifi /></span> Buy Data
                            <BiChevronDown className="ml-auto" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><FaTv /></span> TV Subscription
                            <BiChevronDown className="ml-auto" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><MdElectricBolt /></span> Pay Electric Bill
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><FaHistory /></span> Transaction History
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><MdOutlineSupportAgent /></span> Help & Support
                        </a>
                    </li>
                </ul>
            </div>

            {/* Transparent Blue Overlay */}
            <div className='hidden md:block absolute top-0 w-full left-0 h-screen bg-gradient-overlay z-20 pointer-events-none'></div>
            <h2 className='hidden md:block absolute bottom-10 left-5 text-white font-bold text-3xl z-20'>
                The best place to subscribe/buy
            </h2>
        </div>
        <div className='md:flex-1 w-full p-5 md:ml-64'>
            <Nav />
            <div className='md:flex-1 flex items-center justify-center'>
                <LoginForm />
            </div>
        </div>
    </div>
  );
};

export default Layout;