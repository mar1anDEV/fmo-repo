import React from 'react';

function Aviation() {

    const aviationLinks = [
        {name:'Informationen & Entgeltordnungen', linkhref:'https://www.fmo.de/aviation/informationen-entgeltordnungen/'},
        {name:'General Aviation', linkhref:'https://www.fmo.de/general-aviation/'},
        {name:'Charter Services',linkhref:'https://www.fmo.de/charter-services/'},
        {name:'Flugschule & Technik', linkhref:'https://www.fmo.de/flugschule-technik/'}
    ]

  return (
        <ul className='absolute shadow-md min-w-[250px] px-4 py-2 top-0 -left-4 bg-white transition-all duration-300 ease-in-out'>
          {aviationLinks.map((businessLink,businessLinkIndex)=>(
            <li key={businessLinkIndex}>
                <a href={businessLink.linkhref} className='dropdown-link font-medium tracking-wide block py-2 hover:translate-x-1 transition-transform duration-200'><span>{businessLink.name}</span></a>
            </li>
          ))}
        </ul>
        );
}

export default Aviation;