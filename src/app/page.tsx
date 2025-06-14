import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Abc from './components/Abc';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FooterPage from './components/FooterPage';
const Home = () => {
  return (
    <>
      <section id='hero' >
        <Hero />
      </section>
      <Showcase />
      <section id="services">
        <Abc />
      </section>
      <Testimonials />
      <Faq />
      <section id="booking">
        <Booking />
      </section>
      <FooterPage />
    </>

  );
}

export default Home
