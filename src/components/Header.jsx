// src/components/Nav.jsx
import { MdNotificationsNone, MdMenu } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const Header = ({ toggleSidebar }) => {
  return (
    <div className='flex justify-end gap-1 items-center w-full bg-white p-4'>
      
      <div className='flex gap-1 items-center'>
        <p className='font-semibold text-blue-500 cursor-pointer'>Upgrade To Merchant</p>
        <MdNotificationsNone size={24} className='text-blue-500 cursor-pointer'/>
        <VscAccount size={24} className='text-blue-500 cursor-pointer'/>
      </div>
      <MdMenu 
        size={28} 
        className='text-blue-500 cursor-pointer lg:hidden' 
        onClick={toggleSidebar} 
      />
    </div>
  );
}

export default Header;
