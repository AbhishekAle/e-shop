import React from 'react'
import './Categories.css'
import { Link, useMatch, useResolvedPath  } from 'react-router-dom'


function Categories() {
  return (
    
        <div className='category-card'>
          <h1>Categories</h1>
          <ul>
            <CustomLink to="/nike"><img src='./img/shoes.jpeg' className='a-1' alt='addidas'></img><h3>SHOES</h3></CustomLink>
            <CustomLink to="/nike"><img src='./img/clothing.jpg' className='a-1' alt='addidas'></img><h3>CLOTHING</h3></CustomLink>
            <CustomLink to="/nike"><img src='./img/bestseller.png'className='a-1' alt='addidas'></img><h3>BEST SELLERS</h3></CustomLink>
            <CustomLink to="/nike"><img src='./img/newarrival.jpeg' className='a-1' alt='addidas'></img><h3>NEW ARRIVALS</h3></CustomLink>
            
          </ul>
            </div>
      )
    }
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


export default Categories