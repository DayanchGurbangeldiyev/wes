import React from 'react'
import About from './component/About';
import Banner from './component/Banner';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Portfolio from './component/Portfolio';
import Preloader from './component/Preloader';
import Services from './component/Services';
import Testiomanal from './component/Testiomanal';

const App = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testiomanal/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;