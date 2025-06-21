import React from 'react'
import Navbar from './(cms)/components/Navbar'
import Hero from './(cms)/components/Hero'
import Showcase from './(cms)/components/Showcase'
import Abc from './(cms)/components/Abc';
import Faq from './(cms)/components/Faq';
import Testimonials from './(cms)/components/Testimonials';
import Booking from './(cms)/components/Booking';
import FooterPage from './(cms)/components/FooterPage';
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
