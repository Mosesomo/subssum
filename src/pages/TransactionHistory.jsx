import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { IoFilterOutline } from "react-icons/io5";
import { useState } from 'react';


const transactions = [
    {
        id: 1,
        type: "Airtel Airtime VTU",
        amount: "₦100.00",
        paymentMethod: "Wallet",
        transactionNo: "17054366488605636389F68513",
        total_amount: "₦600.00",
        status: "Successful",
    },
    {
        id: 2,
        type: "Airtel DATA VTU",
        amount: "₦100.00",
        paymentMethod: "Card Payment",
        transactionNo: "17054366488605636389F68514",
        total_amount: "₦700.00",
        status: "Failed",
    },
    {
        id: 1,
        type: "Airtel Airtime VTU",
        amount: "₦100.00",
        paymentMethod: "Wallet",
        transactionNo: "17054366488605636389F68513",
        total_amount: "₦600.00",
        status: "Successful",
    },
    {
        id: 2,
        type: "Airtel DATA VTU",
        amount: "₦100.00",
        paymentMethod: "Card Payment",
        transactionNo: "17054366488605636389F68514",
        total_amount: "₦700.00",
        status: "Failed",
    },
];

const TransactionHistory = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex w-[100%]'>
            <Sidebar isOpen={isSidebarOpen} />
            <div className='flex-1 w-full p-5 lg:ml-64 px-6'>
                <Header toggleSidebar={toggleSidebar} />
                <div className='flex justify-between items-center p-2'>
                    <h2 className="text-xl font-semibold mt-7 w-full text-gray-700">Transaction History</h2>
                </div>
                <button className="bg-gray-200 text-gray-800 p-2 pr-14 text-start rounded-md flex gap-2 items-center mt-12 border-[2px]">
                    <IoFilterOutline /> Filter
                </button>
                <div className="overflow-x-auto mt-8">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Service</th>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Amount</th>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Total Amount</th>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Status</th>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Payment Method</th>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Transaction No</th>
                                <th className="py-2 md:text-left text-gray-600  text-[8px] md:text-[14px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b">
                                    <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{transaction.type}</td>
                                    <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{transaction.amount}</td>
                                    <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{transaction.total_amount}</td>
                                    <td className={`py-2 text-left text-[7px] pr-2 md:text-[13px] ${transaction.status === "Successful" ? "text-green-500" : "text-red-500"}`}>
                                        {transaction.status}
                                    </td>
                                    <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{transaction.paymentMethod}</td>
                                    <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">{transaction.transactionNo}</td>
                                    <td className="py-2 text-left text-gray-800 text-[7px] pr-2 md:text-[13px]">
                                        <button className="bg-gray-100 text-blue-500 p-1 px-2 rounded-md">open</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TransactionHistory;