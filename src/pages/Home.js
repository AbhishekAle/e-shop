import React from 'react'
import './Home.css'
import { Link, useMatch, useResolvedPath  } from 'react-router-dom'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Itemcard from '../components/Item-card'
import SportsEssential from '../components/SportsEssential'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className='container-2'>
      <Slider/>
      
      
      <Categories/>
      <CustomLink to="/nike"><img src='./img/bestrong.png'className='banner' alt='banner'></img></CustomLink>
      
    
      <Itemcard/>

      <SportsEssential/>
      <Footer/>
      </div>
      
      
    
  )}
      


function CustomLink({to, children, ...props}){
const resolvePath = useResolvedPath(to)
const isActive = useMatch({path : resolvePath.pathname, end:true})

  return(
    <li className={ isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
            </Link>
        </li>
  )
}

   

export default Home;