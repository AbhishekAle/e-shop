import React from 'react'
import './Home.css'
import { Link, useMatch, useResolvedPath  } from 'react-router-dom'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Itemcard from '../components/Item-card'



function Home() {
  return (
    <div className='container-2'>
      <Slider/>
      
      
      <Categories/>
      <CustomLink to="/nike"><img src='./img/bestrong.png'className='banner' alt='banner'></img></CustomLink>
      
    
      <Itemcard/>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minima esse itaque, quisquam fugiat eius deserunt. Sapiente reprehenderit laudantium, optio odio dolore, amet quidem similique eveniet explicabo, quibusdam dignissimos voluptatum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim autem commodi, optio alias modi porro nisi inventore earum est asperiores maiores laudantium dolorum reiciendis quibusdam voluptas libero reprehenderit aliquid facilis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore ipsa eum. Facere in assumenda modi quibusdam animi sapiente quaerat rem laudantium quisquam. Sint obcaecati, magni laborum pariatur quasi repellat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minima esse itaque, quisquam fugiat eius deserunt. Sapiente reprehenderit laudantium, optio odio dolore, amet quidem similique eveniet explicabo, quibusdam dignissimos voluptatum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim autem commodi, optio alias modi porro nisi inventore earum est asperiores maiores laudantium dolorum reiciendis quibusdam voluptas libero reprehenderit aliquid facilis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore ipsa eum. Facere in assumenda modi quibusdam animi sapiente quaerat rem laudantium quisquam. Sint obcaecati, magni laborum pariatur quasi repellat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita minima esse itaque, quisquam fugiat eius deserunt. Sapiente reprehenderit laudantium, optio odio dolore, amet quidem similique eveniet explicabo, quibusdam dignissimos voluptatum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim autem commodi, optio alias modi porro nisi inventore earum est asperiores maiores laudantium dolorum reiciendis quibusdam voluptas libero reprehenderit aliquid facilis!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi inventore ipsa eum. Facere in assumenda modi quibusdam animi sapiente quaerat rem laudantium quisquam. Sint obcaecati, magni laborum pariatur quasi repellat.
      </p>
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