import React from 'react'
import './Item-card.css'
import { Link, useMatch, useResolvedPath  } from 'react-router-dom'
import  {useState} from "react"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const item1 = [
  
  {
    name:"Goldstar",
    image: "img/goldstar/g3.png",
    
  },
  {
    name:"Adidas",
    image: "img/addidas/a3.png",
    
    
  },
  {
    name:"T-shirt",
    image: "img/bestseller.png",
    
  },

  {
    name:"Puma",
    image: "img/puma/p1.png",
    
  },
  
];

const item2 = [
  
  {
    name:"Caliber",
    image: "img/shoes.jpeg",
    
  },
  {
    name:"Trouser",
    image: "img/clothing.jpg"
    
  },
  {
    name:"Hoddie",
    image: "img/newarrival.jpeg"
    
  },
  {
    name:"Timberland",
    image: "img/timberwood/t3.jpeg"
    
  },
];

    function ItemDisplay({items}) {
    
      return (
        
        <div className='item-card'>
          {items.map((item,index) => (
            <div key={index}>
             <ul >
             <CustomLink to="/nike"><img src= {item.image} className='a-3' alt={item.name} ></img></CustomLink>
             <h2>{item.name}</h2>
           </ul>
           
           </div>
          ))}
        </div>
        
      );
          }
    function Itemcard(){
      const [currentItems, setCurrentItems] = useState(item1);
      const [activeButton, setActiveButton] = useState("item1");
      
      function handleClick(items, buttonName) {
        setCurrentItems(items);
        setActiveButton(buttonName);
      }
    
      return (
        <div>
          <button id='item1'
            onClick={() => handleClick(item1, "item1")} 
            className={  activeButton === "item1" ? "active" : ""}
            
          >
            Trending Now
          </button>
          <button id='item2'
            onClick={() => handleClick(item2, "item2")}
            className={activeButton === "item2" ? "active" : ""}
          >
            New Arrival
          </button>
          <ItemDisplay items={currentItems} />
        </div>
      );
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
    
    

export default Itemcard