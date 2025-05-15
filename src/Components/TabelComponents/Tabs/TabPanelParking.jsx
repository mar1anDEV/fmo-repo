import React from "react";
import { DateTime } from 'luxon';

const TabPanelParking = ({isActive}) =>{
    const dt = DateTime.now();
    const europeTime = dt.setZone('Europe/Berlin');
    const europeTimeNow = europeTime.toFormat('HH:mm')
    const europeDateNow = europeTime.toFormat('yyyy-MM-dd')
    return(
        <div 
            id="v-pills-parking" 
            className={`tab-panel ${isActive ? 'block tabFade' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby="v-pills-parking-tab">

            <div className='departure-header'>
                <div className='departure-headline'>
                    <h1 className='departure-header-text universal-txt font-extrabold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl'>Parkplatz buchen</h1>
                </div>
            </div>

            <div className="parkingform">
                <form className="my-5">
                 <div className="form-header-beginn"><span className="text-sm text-[#002844] universal-txt">Parkbeginn</span></div>
                    <div className="date-parkTime-begin-container my-1.5 flex gap-1.5 sm:gap-6.5 lg:gap-7.5">
                        <div className="date-parkTime-fRow  flex-2/4 flex flex-col">
                            <input type="date"  className="px-2 py-1 outline outline-gray-300" value={europeDateNow} name="dateTime-beginn" id=""/>
                        </div>
                        <div className="date-parkTime-fRow lg:pl-4 flex flex-1/4 flex-col">
                            <input type="time" className="px-2 py-1 outline outline-gray-300" value={europeTimeNow} name="" id="" />
                        </div>
                    </div>
                </form>

                <form className="my-5">
                 <div className="form-end-header"><span className="text-sm universal-txt">Parkende</span></div>
                    <div className="date-parkTime-begin-container my-1.5 flex gap-1.5 sm:gap-6.5 lg:gap-7.5">
                        <div className="date-parkTime-fRow flex-2/4 flex flex-col">
                            <input type="date"  className="px-2 py-1 outline outline-gray-300" name="dateTime-beginn" id=""/>
                        </div>
                        <div className="date-parkTime-fRow lg:pl-4 flex flex-1/4 flex-col">
                            <input type="time" className="px-2 py-1  outline outline-gray-300" value="00:00"  name="" id="" />
                        </div>
                    </div>
                </form>

                <div className="coupon-btn-holder flex flex-col gap-5.5">
                    <div className="w-full sm:w-6/10 md:w-6/10 lg:w-6/10 xl:w-6/10">
                        <input type="text" className="px-2 py-1 w-full outline outline-gray-300" placeholder="Coupon code"/>
                    </div>
    
               <div className="my-2 py-2 w-full">
               <a 
                href="" 
                className='text-white text-md rounded-md  cursor-pointer bg-[#002844] text-center px-6 py-4'
                >
                Parkplatz buchen
                </a>
               </div>

        </div>

            </div>

        </div>
    );
}

export default TabPanelParking;