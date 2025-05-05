import React from 'react';
import arrivalFlights from './js/DATA_ARRIVAL';
import DayPicker from './DayPicker';
const TabPanelArrival = ({ isActive }) => {
    return (
        <div 
            id="v-pills-ankunft" 
            className={`tab-panel ${isActive ? 'block' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby="v-pills-ankunft-tab"
        >
            <div className='arrival-header flex justify-between'>
                <div className='arrival-headline'>
                    <h1 className='arrival-header-text text-[#002844] font-extrabold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl'>Ankunft</h1>
                </div>
                <div className="relative">
                    
                        <DayPicker/>
                    
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <table className="min-w-full my-1.5">
                <thead className="bg-gray-50">
                    <tr className="border-b">
                        <th className="px-6 py-2 text-left text-sm uppercase w-1/3">Zeit</th>
                        <th className="px-6 py-2 text-left text-sm uppercase w-1/3">Von</th>
                        <th className="px-6 py-2 text-left text-sm uppercase w-1/3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {arrivalFlights.map((flight, index) => (
                        <tr key={index} className="border-b border-gray-300 ">
                            <td className="px-6 py-2 text-md">{flight.time}</td>
                            <td className="px-6 py-2 text-black text-md">{flight.origin} <span className='text-sm lg:ml-2 opacity-70 text-gray-500'>{flight.flightNumber}</span></td>
                            <td className="px-2 py-2 text-md"><span className={`text-sm ${flight.isLate ? 'text-red-600 ': 'bg-[#002844]  px-2 rounded-md py-1 text-white'}`}>{flight.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a 
                href="https://www.fmo.de/abflug-ankunft/" 
                className='all-fligts-btn text-white text-md rounded-md mt-4 cursor-pointer block md:w-auto lg:w-fit bg-[#002844]  text-center'
                >
                Alle Flüge...
                </a>
        </div>
    );
};

export default TabPanelArrival;