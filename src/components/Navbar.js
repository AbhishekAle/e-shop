import React from 'react'
import "./Navbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useMatch, useResolvedPath  } from 'react-router-dom'


function Navbar() {

  return (
    <div className='nav' >
      <Link to='/' className='site-title'>E-Shop</Link>
      <ul>
        <CustomLink to="/men">MEN</CustomLink>
        <CustomLink to="/women">WOMEN</CustomLink>
        <CustomLink to="/kids">KIDS</CustomLink>
      </ul>

      <div className="search-container">
      <form action="/action_page.php">
      <input type="text" placeholder="Search in store..." name="search"/>
      <div className='search-btn'>
      <button type="submit" ><SearchIcon/></button>
      </div>
    </form>
  </div>

    <div className='r-nav'>
      <ul>
        <CustomLink to="/favourite"><FavoriteBorderIcon/></CustomLink>
        <CustomLink to="/cart"><ShoppingCartOutlinedIcon/></CustomLink>
        <switch>
        <Link to="/profile" ><AccountCircleOutlinedIcon/></Link>
        </switch>
      </ul>
      </div>
     
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

export default Navbar;