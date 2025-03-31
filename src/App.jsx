import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import ChairmanSpeech from '../src/components/ChairmanSpeech/ChairmanSpeech'
import About from './components/About/About'
import Product from './components/Products/Product'
import Services from './components/Services/Services'
import Offerings from './components/Offerings/Offerings'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
    <div className='flex flex-col'>
      <Header/>
      <Hero/>
      <ChairmanSpeech/>
      <About/>
      <Offerings/>
      <Product/>
      <Services/>
      <WhyChooseUs/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
