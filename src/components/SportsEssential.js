import React from 'react'
import './SportsEssential.css'

function SportsEssential() {
  return (
    <div>
    <a href='/football'><button className='football-btn'>Shop</button></a>
    <a href='/cricket'><button className='cricket-btn'>Shop</button></a>
    <a href='/sports'><button className='sports-btn'>Shop</button></a>
    <a href='/basketball'><button className='basketball-btn'>Shop</button></a>
    <h4>Sports Essentials</h4>
    <div className='games'>
    <img src='img/SportsEssential/Football.jpg' alt=''  className='Football'></img>
    <text className='text3'>
    <br />
    <pre>Find Essentials<br />
        For Football      </pre><br />
    </text>
    <img src='img/SportsEssential/Cricket.jpg' alt='' className='Cricket'></img>
    <text className='text4'>
    <br />
    <pre> Find Essentials<br />
    For Cricket       </pre><br />
    </text>
    <img src='img/SportsEssential/Sports.jpg' alt='' className='Sports'></img>
    <text className='text5'>
    <br />
    <pre> Find Essentials<br />
    For Running     </pre><br />
    </text>
    <img src='img/SportsEssential/Basketball.jpg' alt='' className='Basketball'></img>
    <text className='text6'>
    <br />
    <pre>Find Essentials<br />
    For Basketball </pre><br />
    </text>
    </div>
    
    </div>
  )
}


export default SportsEssential;