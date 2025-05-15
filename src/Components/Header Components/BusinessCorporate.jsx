import React from 'react';

function BusinessCorporate() {
    const businessLinks = [
        {name:'Unternehmen', linkhref:'https://www.fmo.de/unternehmen/'},
        {name:'News', linkhref:'https://www.fmo.de/news/'},
        {name:'Betrieb & Sicherheit',linkhref:'https://www.fmo.de/betrieb-sicherheit/'},
        {name:'Ausbildung', linkhref:'https://www.fmo.de/ausbildung/'},
        {name:'Arbeiten am FMO', linkhref:'https://www.fmo.de/arbeiten-am-fmo/'},
        {name:'Konferenzraumzentrum', linkhref:'https://www.fmo.de/konferenzraumzentrum/'}
    ]

return (
<ul className='absolute shadow-md min-w-[250px] px-4 py-2 top-0 -left-4 bg-white transition-all duration-300 ease-in-out'>
  {businessLinks.map((businessLink,businessLinkIndex,)=>(
    <li key={businessLinkIndex}>
        <a href={businessLink.linkhref} className='dropdown-link font-medium tracking-wide block py-2 hover:translate-x-1 transition-transform duration-200'><span>{businessLink.name}</span></a>
    </li>
  ))}
</ul>
);
}

export default BusinessCorporate;