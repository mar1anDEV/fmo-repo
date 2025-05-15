import React from 'react';

function TravelFlying() {

    const travelLinks = [
        {name:'Flugplan & Ziele',linkhref:'https://www.fmo.de/flugplan-ziele/'},{name:'Abflug & Ankunft',linkhref:'https://www.fmo.de/abflug-ankunft/'},
        {name:'Jetzt buchen', linkhref:'https://www.fmo.de/jetzt-buchen/'},{name:'Anreise',linkhref:'https://www.fmo.de/anreise/'},
        {name:'Sonderreisen', linkhref:'https://www.fmo.de/sonderreisen/'},{name:'Parken',linkhref:'https://www.fmo.de/parken/'}
    ]
  return (
    <ul className='absolute shadow-md min-w-[250px] px-4 py-2 top-0 -left-4 bg-white transition-all duration-300 ease-in-out'>
      {travelLinks.map((travelLink, travelLinkIndex) => (
  <li key={travelLinkIndex}>
    <a href={travelLink.linkhref} className='dropdown-link font-medium tracking-wide hover:translate-x-1 transition-transform duration-200 block py-2'><span>{travelLink.name}</span></a>
  </li>
))}
    </ul>
  );
}

export default TravelFlying;