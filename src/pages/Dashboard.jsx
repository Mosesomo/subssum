import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import card from '../assets/card.png';
import { FaRegCopy } from "react-icons/fa";
import { CiEdit, CiWallet } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { useState } from 'react';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className='flex w-[100%]'>
      <Sidebar isOpen={isSidebarOpen} />
      <div className='flex-1 w-full p-5 lg:ml-64'>
        <div className='flex justify-between items-center p-2 w-full'>
          <h2 className="text-xl font-semibold mt-2 lg:w-full text-gray-700">Welcome, Lawal Wahab</h2>
          <Header toggleSidebar={toggleSidebar}/>
        </div>
        <div className="flex flex-col p-5 md:p-10 bg-white h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
              <div className='border-[2px] p-5 rounded-lg flex justify-between w-full'>
                <div className=''>
                  <h3 className="font-semibold mb-2 text-gray-800">Wallet Balance</h3>
                  <p className="text-2xl font-bold text-gray-800">₦3000</p>
                </div>
                <button className="bg-blue-800 text-white py-2 px-4 mt-5 rounded-lg px-6">Fund Wallet</button>
              </div>
              <div className="mt-5 border-[2px] p-5 rounded-lg">
                <h4 className="font-semibold mb-4">Referral</h4>
                <p>Referral Code: <strong>18/js2h0089</strong></p>
                <div className="mt-4 flex">
                    <button className="mr-6 text-blue-500 font-semibold flex gap-2 items-center">
                      <FaRegCopy className='text-blue-500'/>Copy
                    </button>
                    <button className="mr-6 text-blue-500 font-semibold flex gap-2 items-center">
                      <CiEdit className='text-blue-500'/>Edit
                    </button>
                    <button className="text-blue-500 font-semibold flex gap-2 items-center">
                      <FaShare className='text-blue-500'/>Share
                    </button>
                </div>
              </div>
              <div className="mt-5 border-[2px] p-5 rounded-lg">
                <div className='flex justify-between items-center'>
                  <div>
                    <h4 className="font-semibold">Total Referrals Made</h4>
                    <p className="text-2xl font-bold text-gray-800">0</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Total Referrals Made</h4>
                    <p className="text-2xl font-bold text-gray-800">₦0.00</p>
                  </div>
                </div>
                <button className="text-blue-500 font-semibold flex gap-2 items-center mt-5">
                  <CiWallet size={28}/>Cashout
                </button>
              </div>
            </div>
            <div className="w-full">
              <img className='object-fit w-full' src={card}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
