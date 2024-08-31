import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AirtimeToCash = () => {
    return (
        <div className='flex w-[100%]'>
            <Sidebar />
            <div className='flex-1 w-full p-5 ml-64'>
                <div className='flex justify-between items-center p-2'>
                    <h2 className="text-xl font-semibold mt-7 w-full text-gray-700">Airtime to Cash</h2>
                    <Header />
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <div className="w-[514px] p-6 mt-12">
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 items-center hover:text-blue-800 hover:border-blue-800 text-[14px]-600  cursor-pointer'>
                                <p className='text-gray-300 text-bold hover:text-blue-600 text-[14px] text-blue-800'>File Info</p>
                                <div className="border-[2px] border-blue-800 w-[146px] hover:border-blue-800"></div>
                            </div>
                            <div className='flex flex-col gap-2 items-center hover:text-blue-600 cursor-pointer'>
                                <p className='text-gray-300 text-bold hover:text-blue-600 text-[14px]'>Make Payement</p>
                                <div className="border-[2px] border-gray-300 w-[146px] hover:border-blue-800"></div>
                            </div>
                            <div className='flex flex-col gap-2 items-center hover:text-blue-600 cursor-pointer'>
                                <p className='text-gray-300 text-bold hover:text-blue-600 text-[14px]'>View Reciept</p>
                                <div className="border-[2px] border-gray-300 w-[146px] hover:border-blue-800"></div>
                            </div>
                        </div>
                        <div className='bg-[#EFF3FB] border-[1px] w-[478px] mt-12 rounded-lg p-3 px-6'>
                            <h3 className='text-center font-bold text-gray-700'>Airtime To Cash</h3>
                            <div className='mt-8'>
                                <form action=''>
                                    <div className='flex justify-between'>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2">Select Network</label>
                                            <input type="email" className="w-full border border-gray-300 rounded-lg p-2 outline-none" placeholder="example@gmail.com" required />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 mb-2">Phone Number</label>
                                            <input type="email" className="w-full border border-gray-300 rounded-lg p-2 outline-none" placeholder="123456678" required />
                                        </div>
                                        
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Amount</label>
                                        <input type="email" className="w-full border border-gray-300 rounded-lg p-2 outline-none" placeholder="₦3000" required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Airtime share pin</label>
                                        <input type="email" className="w-full border border-gray-300 rounded-lg p-2 outline-none" placeholder="123456678" required />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-700 text-white rounded-lg shadow-lg py-2 mt-4">Proceed</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirtimeToCash;