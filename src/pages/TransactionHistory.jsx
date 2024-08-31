import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const TransactionHistory = () => {
    return (
        <div className='flex w-[100%]'>
            <Sidebar />
            <div className='flex-1 w-full p-5 ml-64'>
                <div className='flex justify-between items-center p-2'>
                    <h2 className="text-xl font-semibold mt-7 w-full text-gray-700">Transaction History</h2>
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory;