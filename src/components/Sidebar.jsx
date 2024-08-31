{/** sidebar */}
import { MdDashboard, MdElectricBolt, MdOutlineSupportAgent, MdSpaceDashboard } from "react-icons/md";
import { FaPhoneAlt, FaWifi, FaTv, FaHistory } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
      <div className="bg-[#EFF3FB] fixed h-screen w-64 p-5 text-black rounded-lg shadow-lg">
                <div className='flex items-center gap-2'>
                    {/*<MdSpaceDashboard size={38} className='mb-10'/>*/}
                    <img src={logo} className='object-fit mb-10 w-[20.75px] h-[30.62px]'></img>
                    <h1 className="text-xl font-bold mb-10 text-blue-900">SUBSSUM</h1>
                </div>
                <ul>
                    <Link to="/dashboard">
                        <li className="mb-4">
                            <a href="" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                                <span className="mr-2"><MdDashboard /></span> Dashboard
                                <BiChevronDown className="ml-auto" />
                            </a>
                        </li>
                    </Link>
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
                    <Link to="/airtimetocash">
                        <li className="mb-4">
                            <a href="" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                                <span className="mr-2"><MdElectricBolt /></span> Airtime to Cash
                            </a>
                        </li>
                    </Link>
                    <Link to='/transactions'>
                        <li className="mb-4">
                            <a href="" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                                <span className="mr-2"><FaHistory /></span> Transaction History
                            </a>
                        </li>
                    </Link>
                    <li className="mb-4">
                        <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                            <span className="mr-2"><MdOutlineSupportAgent /></span> Help & Support
                        </a>
                    </li>
                </ul>
                <div className='absolute bottom-5'>
                    <a href="#" className="flex items-center p-2 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200">
                        <span className="mr-2"><MdOutlineSupportAgent /></span> Logout
                        <BiChevronDown className="ml-auto" />
                    </a>
                </div>
            </div>
    );
  };

export default Sidebar