import React from 'react';
import Header from './Components/Header'
import Carousel from './Components/Carousel';
import PanelFlights from './Components/PanelFlights';
import PanelZielen from './Components/PanelZielen';
import './App.css'

function App() {
  return (
    <>
      
      <main className='fmo-page--wrapper  h-auto'>
        <Header />
        <div className="main--content relative h-auto">
          <Carousel/>
        </div>
        <div className='relative block  transform -translate-y-[5vh] z-40 '>
        <div className="panels ">
          <div className="panels--wrapper flex flex-wrap justify-center gap-7 xl:space-x-8 xl:mx-auto">
            <PanelFlights/>
            <PanelZielen/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
 }

export default App