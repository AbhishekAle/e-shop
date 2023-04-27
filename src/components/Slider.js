
import './Slider.css'
import { Link, useMatch, useResolvedPath  } from 'react-router-dom'


function Slider() {
  return (
    <div className='cont-3'>
        {/*<!--image slider start-->*/}
    <div className="slider">
      <div className="slides" >
        {/*<!--radio buttons start-->*/}
        
        <input type="radio" name="radio-btn" id="radio1"></input>
        <input type="radio" name="radio-btn" id="radio2"></input>
        <input type="radio" name="radio-btn" id="radio3"></input>
        <input type="radio" name="radio-btn" id="radio4"></input>
        <input type="radio" name="radio-btn" id="radio5"></input>
        <input type="radio" name="radio-btn" id="radio6"></input>
      
        
        {/*radio buttons end
        <!--slide images start-->*/}
        <div className="slide first">
          <CustomLink to='/banner'><img src="img/banner.jpg" alt=""></img></CustomLink>
        </div>
        <div className="slide">
          <CustomLink to='/banner1'><img src="img/banner1.jpg" alt=""></img></CustomLink>
        </div>
        <div className="slide">
          <CustomLink to='/banner2'><img src="img/banner2.jpg" alt=""></img></CustomLink>
        </div>
        <div className="slide">
          <CustomLink to='/banner3'><img src="img/banner3.jpg" alt=""></img></CustomLink>
        </div>
        <div className="slide">
            <CustomLink to='/banner4'><img src="img/banner4.jpg" alt=""></img></CustomLink>
        </div>
        <div className="slide">
            <CustomLink to='/banner5'><img src="img/banner5.png" alt=""></img></CustomLink>
        </div>
          
        {/*<!--slide images end-->
        <!--automatic navigation start-->*/}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
          <div className="auto-btn5"></div>
          <div className="auto-btn6"></div>
        </div>
        {/*<!--automatic navigation end-->*/}
      </div>
      {/*<!--manual navigation start-->*/}
      <div className="navigation-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
        <label for="radio5" className="manual-btn"></label>
        <label for="radio6" className="manual-btn"></label>
      </div>
      {/*<!--manual navigation end-->*/}
    </div>
    {/*<!--image slider end-->*/}

    
    

    </div>
  )
}

var counter = 1
 setInterval(function(){
  var rslider = document.getElementById("radio" + counter);
  if (rslider) {
    var isChecked = rslider.checked = true;
    counter++;
    console.log(isChecked)
  
  if (counter > 6){
    counter=1;
  }};
   
},3000);


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


   
      
    
     



export default Slider