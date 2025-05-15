import React, { useState } from 'react';
import TabPanelArrival from './Tabs/TabPanelArrival'
import TabPanelDeparture from './Tabs/TabPanelDeparture'
import TabPanelParking from './Tabs/TabPanelParking'

const PanelFlights = () => {
    const menuNavPills = [
        {
            name: 'Abflug', 
            svgDesc: 'Abflug Icon',
            svgElement: 'https://www.fmo.de/typo3conf/ext/do_flight_info/Resources/Public/Icons/plane-departure-solid.svg', 
            isActive: true, 
            role: 'tab',
            id: 'v-pills-departure-tab',
            class: 'border--departure-btn', 
            controls: 'v-pills-departure'
        },
        {
            name: 'Ankunft', 
            svgDesc: 'Ankunft Icon', 
            svgElement: 'https://www.fmo.de/typo3conf/ext/do_flight_info/Resources/Public/Icons/plane-arrival-solid.svg',
            isActive: false, 
            role: 'tab',
            id: 'v-pills-ankunft-tab',
            class: 'border--arrival-btn', 
            controls: 'v-pills-ankunft'
        },
        {
            name: 'Parken', 
            svgDesc: 'Parking Icon', 
            svgElement: 'https://www.fmo.de/typo3conf/ext/do_flight_info/Resources/Public/Icons/car-solid.svg',
            isActive: false,
            role: 'tab',
            id: 'v-pills-parking-tab',
            class: 'border--parking-btn', 
            controls: 'v-pills-parking'
        }
    ];
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    const switchTab = (index) => {
        setActiveTabIndex(index);
    };
    
    return (
        <section className='fmo--flights bg-white w-full shadow-xl'>
            <div className='flex w-full h-full relative'>
                <ul className='btnTab--container flex buttons--md--lg flex-col justify-around mr-3.5'>
                    {menuNavPills.map((buttonPill, buttonIndex) => (
                        <button 
                            key={buttonIndex}  
                            onClick={() => switchTab(buttonIndex)}
                            className={`nav-pill nav-pill-border-custom transition duration-300 px-7 py-9 flex-1 cursor-pointer ${buttonPill.class} ${buttonIndex === activeTabIndex ? 'active-pill nav-pill-border' : ''}`}
                            type='button'
                            id={buttonPill.id} 
                            aria-selected={buttonIndex === activeTabIndex}
                            aria-controls={buttonPill.controls}
                            role={buttonPill.role}
                        >
                            <span className=''>
                                <img src={buttonPill.svgElement} className='mx-auto block' alt={buttonPill.svgDesc}/>
                                {buttonPill.name}
                            </span>
                        </button>
                    ))}
                </ul>
                <div className='buttons--xs--sm min-w-full block md:hidden -top-10 absolute'>
                <ul className='buttons--xs--sm--container flex justify-between space-x-1 '>
                {menuNavPills.map((buttonPill, buttonIndex) => (
                        <button 
                            key={buttonIndex}
                            onClick={() => switchTab(buttonIndex)}
                            id={`mobile-${buttonPill.id}`} 
                            className={`nav-pill--xs--sm px-2 py-2 scale-95  w-1/3 bg-white ${menuNavPills[buttonIndex].class} ${buttonPill.isActive ? 'active-pill' : ''}`}
                            type='button' 
                            aria-selected={buttonIndex === activeTabIndex}
                            aria-controls={buttonPill.controls}
                            role={buttonPill.role}
                        >
                            <span>
                                {buttonPill.name}
                            </span>
                        </button>
                    ))}
                </ul>
                </div>


                <div className='tabContent w-full relative sm:mb-6.5 lg:pt-7 scale-90 md:py-0 lg:pr-11 lg:pb-4 lg:pl-3.5' id='v-pills-tabContent'>
                <TabPanelDeparture isActive={activeTabIndex === 0}/>
                <TabPanelArrival isActive={activeTabIndex === 1}/>
                <TabPanelParking isActive={activeTabIndex === 2}/>
                </div>
            </div>
        </section>
    );
};

export default PanelFlights;