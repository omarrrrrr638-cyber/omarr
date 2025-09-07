import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
export function Home(){
  return(
<>
<div>
  <img src='https://github.com/scrimba/learn-react-router-6/blob/main/01%20-%20Introduction%20to%20React%20Router/10%20-%20Initial%20Deploy%20to%20Netlify/assets/images/home-hero.png?raw=true'/>
     <h1>You got the travel plans, we got the travel vans.</h1>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to='vans'>find your van</Link>
  </div>
</>
)
}
export function About(){
  return(
<>
<div>
  <img src='https://github.com/scrimba/learn-react-router-6/blob/main/01%20-%20Introduction%20to%20React%20Router/10%20-%20Initial%20Deploy%20to%20Netlify/assets/images/about-hero.png?raw=true'/>
               <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
      
<div>
                  <h2>Your destination is waiting.<br />Your van is ready.</h2>
<Link to='/vans'>Explore our vans</Link>
</div>
</>
  )
}
export default function Vanlife(){
  return(
    <>
      <BrowserRouter>
      <header>
        <Link to='/'>#vanlife</Link>
        <nav>
      <Link to='/about'>about</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}