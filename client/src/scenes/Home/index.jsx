import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainPage from '../../components/MainPage';
import Nav from '../../components/Nav';

const Home = () => {
  return (
    <div className='fill'>
      <Header />
      <Nav />
      <MainPage />
      <Footer />
    </div>
  )
}

export default Home;