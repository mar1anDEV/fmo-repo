import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
    <section className='fmo--flights-zielen scale-90 md:scale-95 lg:scale-100 lg:px-4 w-fit xl:w-xl  h-fit'>
      <div className='container-zielen relative bg-white shadow-xl flex flex-col align-middle justify-around'>
        <header>
          <h1 className='text-2xl text-[#002844] mb-9.5'>Ziele ab FMO</h1>
        </header>
        <div className='btn-ziele-container'>
        <ul className='flex gap-2.5 flex-wrap'>
          {zielen.map((ziel, index) => (
            <button key={index} className='ziel-btn' type='button'>
              <span className='px-4 text-[#002844] text-sm'>{ziel.name}</span>
            </button>
          ))}
        </ul>
        </div>
        <div className='block z-50'>
          <a href="https://www.fmo.de/flugplan-ziele/" className='flex gap-1'><span className='text-[#002844]  block mt-8 text-[16px]'>Alle Zielen</span> <FaArrowRight  className='mt-auto mb-1 text-[#002844]'/></a>
        </div>
        <div className='absolute inset-0 w-full h-full'>
          <div className='absolute w-full bottom-0 bg-gradient-to-t bg-white opacity-60 min-h-1/4'></div>
        </div>
      </div>
      
    </section>
  );
};

export default PanelZielen;