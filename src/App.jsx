import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Components/Header'
import Carousel from './Components/Carousel';
import PanelFlights from './Components/TabelComponents/PanelFlights';
import PanelZiele from './Components/TabelComponents/PanelZiele'
import Cards from './Components/Cards'
import CarouselNews from './Components/CarouselNews';
import Footer from './Components/Footer';
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, [])
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className={`fmo-page--wrapper overflow-x-hidden w-full bg-[#99A9B426] transition-all duration-350 ease-in-out h-auto ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-20'}`}>
        <Header />
        <section className='--wrapper'>
        <div className="relative h-auto">
          <Carousel/>
        </div>
         <div className='max-w-full relative transform sm:-translate-y-[0vh] md:-translate-y-[5vh] xl:-translate-y-[5vh] z-45'>
        <div className='w-full max-w-xl sm:max-w-3xl lg:max-w-[1200px] mx-auto'>
          <div className='h-auto flex flex-col xl:flex-row gap-8'>
              <PanelFlights/>
              <PanelZiele/>
          </div>
          <div className="cards-container scale-90 md:scale-95 lg:scale-100 max-w-full mt-8 md:mt-0 lg:py-20">
      <Cards/>
    </div>
        </div>
        </div>
        <div className='bg-image-angebot relative'>
          <div className='container container-angebot mx-4 md:px-0 w-full md:max-w-3xl lg:max-w-[1200px] inset-0 md:absolute md:mx-auto'>
            <div className='content scale-90 md:scale-95 lg:scale-100 md:max-w-xl absolute top-0 left-0 bottom-0 h-full md:h-fit my-auto opacity-90 md:bg-white'>
            <img loading='lazy' className='absolute hidden md:block z-40 top-8.5 left-8.5' src="https:www.fmo.de/fileadmin/Content/Testinhalte/9044988_palm_tree_icon.svg" height={"50px"} width={"50px"} alt="" />
            <div className="mb-6 w-full flex flex-col h-full md:h-auto justify-between md:flex-none z-40">
              <p className='text-2xl md:text-xl text-white md:text-black'>Starten Sie ab Flughafen Münster/Osnabrück. Wählen Sie zwischen Flugangeboten, Pauschalreisen, Hotels und mehr.</p>
              <a href="https://www.fmo.de/jetzt-buchen/" className='px-3 py-3 md:mt-4 w-2/3 md:w-3/5 text-center text-xl text-white transition duration-300 hover:bg-teal-600 bg-teal-500 block'>Zu den Angebote...</a></div>
              
            </div>
          </div>
        </div>

        <div className='max-w-full pt-9 my-3.5'>
          <div className="container scale-90 md:scale-95 lg:scale-100 mx-auto  w-full md:max-w-3xl  h-auto lg:max-w-[1200px]">
            <header className='relative mb-6'>
              <h2 className='text-2xl text-[#002844]'>Das Neueste vom FMO</h2>
            </header>
            <CarouselNews/>
          </div>
        </div>

        <div className='bg-image-klima md:mt-4 lg:mt-8 relative'>
          <div className='container container-angebot mx-4 md:px-0 w-full md:max-w-3xl lg:max-w-[1200px] inset-0 md:absolute md:mx-auto'>
            <div className='content scale-90 md:scale-95 lg:scale-100 md:max-w-xl absolute top-0 left-0 bottom-0 h-full md:h-fit my-auto opacity-90 md:bg-white'>
            <img loading='lazy' className='absolute hidden md:block z-40 top-8.5 left-8.5' src="https:www.fmo.de/fileadmin/Content/Testinhalte/leaf-solid.svg" height={"50px"} width={"50px"} alt="" />
            <div className="mb-6 w-full flex flex-col h-full md:h-auto justify-between md:flex-none z-40">
              <p className='text-2xl md:text-xl text-white md:text-black'>Wirtschaftlichkeit, Einhaltung sozialer Normen und der Schutz unserer Umwelt gehen bei uns Hand in Hand.</p>
              <a href="https://www.fmo.de/umweltbericht/" className='px-3 py-3 md:mt-4 w-fit text-center text-xl text-white transition duration-300 hover:bg-teal-600 bg-[#4bb669] block'>Zum Umweltbericht 2022...</a></div>
              
            </div>
          </div>
        </div>
        </section>
        <Footer/>
      </main>
    </>
  )
}

export default App