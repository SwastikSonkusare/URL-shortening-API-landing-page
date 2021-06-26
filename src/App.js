import React from 'react'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';



const App = () => {
    return (
        <>
          <Navbar />  
          <Header />
          <MainSection />
          <Boost />
          <Footer />
        </>
    )
}

export default App
