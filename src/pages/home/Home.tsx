import React from 'react';
import Navbar from '../../components/nav/Navbar';
import Hero from '../../components/hero/Hero';
import Main from '../../components/main/Main';

const Home = () => {
  return (
    <div style={{background: '#F1F1F1' }}>
      <Navbar/>
      <Hero/>
      <Main/>
    </div>
  )
}

export default Home
