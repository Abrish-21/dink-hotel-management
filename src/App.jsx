import React from 'react'
import HotelBg from './assets/images/ResortBg.jpg'


function App() {
  return (
    <main>
      <header>
       <p>NavBar</p>
      </header>
      <section className='h-screen'>
        
        <img src={HotelBg} alt="" className='rounded-lg' />
      </section>
      <section>
        <p>About US</p>
      </section>
      <section>
        <p>Our Facilities</p>
      </section>
      <section>
        <p>Our Rooms</p>
      </section>
      <section>
        <p>Coral Island</p>
      </section>
      <section>
        <p>Review</p>
      </section>
      <section>
        <p>Hotel-Map</p>
      </section>
      <section>
        <p>Footer</p>
      </section>
    </main>
  )
}

export default App