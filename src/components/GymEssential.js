import React from 'react'
import './GymEssential.css'

function GymEssential() {
  return (
    <div>
    <h5>Gym Essentials</h5>
    <div className='gym'>
    <a href='/gymshoes'><button className='shoes-btn'>Shop</button></a>
    <a href='/gymclothing'><button className='clothing-btn'>Shop</button></a>
    <img src='img/GymEssential/shoes.jpg' alt=''  className='shoes'></img>
    <text className='text1'>
    <br />
    <pre> Best Shoes<br />
    For Gym    </pre><br />
    </text>
    <img src='img/GymEssential/clothing.jpg' alt='' className='clothing'></img>
    <text className='text2'>
    <br />
    <pre>  Best Clothing<br />
    For Gym        </pre><br />
    </text>
    </div>
    
    </div>
  )
}



export default GymEssential