import React from 'react';
import Analytics from '../components/analytics/Analytics';
import Cards from '../components/cards/Cards';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </main>
  )
}

export default Home;