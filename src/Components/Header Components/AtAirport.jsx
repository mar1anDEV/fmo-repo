import React from 'react';

function AtAirport() {

        const atAirportLinks = [
            {name:'Check-in & Gepäck', linkhref:'https://www.fmo.de/check-in-gepaeck/'},
            {name:'Gastronomie', linkhref:'https://www.fmo.de/gastronomie/'},
            {name:'Shopping',linkhref:'https://www.fmo.de/am-flughafen/shopping/'},
            {name:'Lounge', linkhref:'https://www.fmo.de/lounge/'},
            {name:'Service Point', linkhref:'https://www.fmo.de/service-point/'},
            {name:'Flughafenführungen', linkhref:'https://www.fmo.de/flughafenfuehrungen/'},
            {name:'Flugsimulator', linkhref:'https://www.fmo.de/flugsimulator/'}
        ]

  return (
    <ul className='absolute shadow-md min-w-[250px] px-4 py-2 top-0 -left-4 bg-white transition-all duration-300 ease-in-out'>
      {atAirportLinks.map((airportLink,airportLinkIndex,)=>(
        <li key={airportLinkIndex}>
            <a href={airportLink.linkhref} className='dropdown-link font-medium tracking-wide block py-2 hover:translate-x-1 transition-transform duration-200'><span>{airportLink.name}</span></a>
        </li>
      ))}
    </ul>
  );
}

export default AtAirport;