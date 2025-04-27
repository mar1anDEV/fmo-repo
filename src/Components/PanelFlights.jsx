
import React from 'react';

const PanelFlights = () => {

    

    const menuNavPills = [
        {name: 'Abflug', svgDesc:'Abflug Icon', svgElement: 'https://www.fmo.de/typo3conf/ext/do_flight_info/Resources/Public/Icons/plane-departure-solid.svg', isActive: true, role: 'tab', controls:'v-pills-departure'},
        {name: 'Ankunft', svgDesc:'Ankunft Icon', svgElement: 'https://www.fmo.de/typo3conf/ext/do_flight_info/Resources/Public/Icons/plane-arrival-solid.svg', isActive: false, role: 'tab', controls:'v-pills-ankunft'},
        {name: 'Parken', svgDesc:'Parking Icon', svgElement: 'https://www.fmo.de/typo3conf/ext/do_flight_info/Resources/Public/Icons/car-solid.svg', isActive: false,role: 'tab', controls:'v-pills-parking'}
    ]
  return (
    <section className='fmo--flights bg-[#fff] w-md md:w-2xl lg:w-3xl xl:w-3xl'>
        <div className='flex p-0 m-0'>
            <ul className='flex flex-col'>
                {menuNavPills.map((buttonPill,buttonIndex) =>(
                        <button key={buttonIndex}  className={`nav-pill cursor-pointer ${buttonPill.isActive ? 'active-pill' : ''}`}
                        type='button' aria-selected={buttonPill.isActive}
                        aria-controls={buttonPill.controls}
                        role={buttonPill.role}>
                            <span className=''>
                            <img src={buttonPill.svgElement} className='mx-auto block' alt={buttonPill.svgDesc}/>
                            {buttonPill.name}
                        </span>
                        </button>
                ))}
            </ul>
            <ul></ul>
        </div>
    </section>
  );
};

export default PanelFlights;