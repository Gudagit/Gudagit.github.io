import React from "react";

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from "./components/services/Services";
import Experience from './components/experience/Expir'
import Portfolio from './components/portfolio/Portfolio'
import Footer from "./components/footer/Footer";
import Contact from './components/contact/Contact'
import Testemo from './components/testemo/Testemo'


const App =() => {
    return (
       <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testemo />
            <Contact />
            <Footer />
            
            

       </>
    )
}

export default App;