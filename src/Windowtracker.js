// import{useState,useEffect}from'react';
// export default function Windowtracker(){
// const [state,setstate]=useState(window.innerWidth); 
// useEffect(function(){
//   function watchwindowwidth(){
//   console.log('resize');
//   setstate(window.innerWidth);
// }
// window.addEventListener('resize',watchwindowwidth);
// return function(){
//   console.log('CLean');
//   window.removeEventListener('resize',watchwindowwidth);
// }
// },[])
// return(<h1>{state}</h1>)
// }