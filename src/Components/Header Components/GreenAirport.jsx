import React from 'react';

function GreenAirport() {

    const greenAirportLinks = [
        {name:'Umweltleitlinien',linkhref:'https://www.fmo.de/umweltleitlinien/'},
        {name:'Fluglärmüberwachung',linkhref:'https://www.fmo.de/fluglaermueberwachung/'},
        {name:'Klimaschutz-Maßnahmen',linkhref:'https://www.fmo.de/klimaschutz-massnahmen/'},
        {name:'Umweltbericht',linkhref:'https://www.fmo.de/umweltbericht/'},
    ]

    return (
        <ul className='absolute shadow-md  min-w-[250px] px-4 py-2 top-0 -left-4 bg-white transition-all duration-300 ease-in-out'>
          {greenAirportLinks.map((greenAirportLink,greenAirportLinkIndex)=>(
            <li key={greenAirportLinkIndex}>
                <a href={greenAirportLink.linkhref} className='dropdown-link dropdown-link-special  font-medium tracking-wide block py-2 hover:translate-x-1  transition-transform duration-200'><span className='text-[#4BB699]'>{greenAirportLink.name}</span></a>
            </li>
          ))}
        </ul>
        );
}

export default GreenAirport;
