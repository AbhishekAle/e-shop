import React from 'react'
import './Home.css'
import Categories from '../components/Categories'
import GymEssential from '../components/GymEssential'
import Slider from '../components/Slider'
import Itemcard from '../components/Item-card'
import SportsEssential from '../components/SportsEssential'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className='container-2'>
      <Slider/>
      
      
      <Categories/>
      <GymEssential/>
    
      <Itemcard/>

      <SportsEssential/>
      <Footer/>
      </div>
      
      
    
  )}
      




   

export default Home;