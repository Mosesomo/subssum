import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BiHide } from "react-icons/bi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[498px] p-6 mt-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-600">Log In</h2>
        <button className="w-full flex items-center justify-center bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-2 mb-4 border-[1px]">
          <FcGoogle size={34} className='mr-4' /> Login with Google
        </button>
        <div className="flex items-center my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <p className="mx-4 text-gray-600 font-semibold">or continue with</p>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <div className='bg-white shadow-lg text-gray-700 font-semibold rounded-lg p-7 mb-4 border-[1px]'>
          <form className=''>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg p-2" placeholder="example@gmail.com" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full border border-gray-300 rounded-lg p-2 pr-10" 
                  placeholder="*******" 
                  required 
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                >
                  {showPassword ? <BiHide size={24} /> : "👁️"}
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-600">Remember me</label>
              </div>
              <div className="text-center">
                <a href="#" className="text-red-500">Recover Password</a>
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-700 text-white rounded-lg shadow-lg py-2">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
