import React from 'react';
import Header from './Components/Header'
import Carousel from './Components/Carousel';
import './App.css'

function App() {
  return (
    <>
      
      <main className='fmo-page--wrapper min-h-screen'>
        <Header />
        <div className="main--content relative h-auto">
          <Carousel/>
        </div>
      </main>
    </>
  )
 }

export default App