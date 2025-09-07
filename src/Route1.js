import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
function home(){
  return(
    <><h1>home</h1></>
  )
}
function about(){
  return(<>
  <h1>about</h1>
  </>)
}

export default function Route1(){
return(
  <>
  <BrowserRouter>
  <nav>
  <Link to='/'>home</Link>
  <Link to='/about'>about</Link>
  </nav>
  <Routes>
    <Route path='/' element={home()}></Route>
    <Route path='/about' element={about()}></Route>

  </Routes>
  </BrowserRouter>
  </>
)
}