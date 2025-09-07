import {useState}from'react';
export default function Joke(x){
  console.log(x);
  console.log(x.upvotes+1);
  console.log(x.ispun);
  const [isshown,setisshown]=useState(false);
  console.log(isshown);
  // if(true&&console.log('true'))
  return(
    <>
    {x.setup&&<h1>setup:{x.setup}</h1>}
    {/* <p style={{display:x.punchline?'block':'none'}}>punchline:{x.punchline}</p> */}
    <p style={{display:isshown?'block':'none'}}>punchline:{x.punchline}</p>
    <h1>{x.ispun}</h1>
    <button onClick={()=>{return setisshown((prev)=>{ return !prev});}}>{isshown?'hide punchline':'show punchline'}</button>
    <hr/>
    </>
  )
}