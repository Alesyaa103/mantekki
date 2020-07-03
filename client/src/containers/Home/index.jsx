import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Nav from '../../components/Nav';
import {Provider} from 'react-redux';
import store from '../../store';
import {BrowserRouter} from 'react-router-dom'
import Routing from '../Routing';

const Home = () => {
  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          {/* <Nav /> */}
          <Routing />
          <Footer />
        </BrowserRouter>
      </Provider>
    </main>
  )
}

export default Home;