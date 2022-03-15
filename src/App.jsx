import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>     
      <Services/>
      <Portfolio/>   
      <Testimonials/>       
      <Contact/>  
      <Footer/>
    </div>
  )
}
export default App