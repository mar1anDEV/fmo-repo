import React from 'react';

const PanelZielen = () => {
  const zielen = [
    {name:'Alicante'},
    {name:'Antalya'},
    {name:'Fuerteventura'},
    {name:'Gran Canaria'},
    {name:'Hurghada'},
    {name:'Izmir'}, 
    {name:'Korfu'},
    {name:'Kreta'},
    {name:'London'},
    {name:'Málaga'},
    {name:'Mallorca'},
    {name:'München'},
    {name:'Pristina'},
    {name:'Teneriffa'},
    {name:'Zadar'}
  ];
  
  return (
    <section className='fmo--flights-zielen bg-white w-xl sm:w-2xl md:w-3xl lg:w-4xl xl:w-sm shadow-xl'>
      <div className='container-zielen mt-0 lg:mt-10 flex flex-col align-middle justify-around'>
        <header>
          <h1 className='text-2xl mb-9.5'>Ziele ab FMO</h1>
        </header>
        <div className='btn-ziele-container'>
        <ul className='flex gap-2.5  flex-wrap w-full'>
          {zielen.map((ziel, index) => (
            <button key={index} className='ziel-btn' type='button'>
              <span className='px-4 text-[#002844] text-sm'>{ziel.name}</span>
            </button>
          ))}
        </ul>
        </div>
        <div>
          <a href="https://www.fmo.de/flugplan-ziele/"><span className='text-[#002844] block mt-2 text-[16px]'>Alle Zielen</span></a>
        </div>
      </div>
    </section>
  );
};

export default PanelZielen;