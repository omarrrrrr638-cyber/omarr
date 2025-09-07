import {useState,useEffect}from'react';
export default function Meme(){
  const[meme,setmeme]=useState({
    toptext:'one does not simply',bottomtext:'walk into mordor',img:'https://i.imgflip.com/1bij.jpg'
  })
  const[allmemes,setallmemes]=useState([])
useEffect(async function(){
const res=await fetch('https://api.imgflip.com/get_memes');
const data=await res.json();
setallmemes(data.data.memes);
},[])
 function handlechange(event){
    const name=event.currentTarget.name;
    const value=event.currentTarget.value;
    console.log('changed',value);
    setmeme((prev)=>{return{...prev,[name]:value}})
  }
  function getmemeimage(){
    const randomnumber=Math.floor(Math.random()*allmemes.length);
    const newmemeurl=allmemes[randomnumber].url;
    setmeme(prevmeme=>{return{...prevmeme,img:newmemeurl}})
  }
  return(
    <>
    <label>top text<input value={meme.toptext} type='text'name='toptext'placeholder='one does not simply' onChange={handlechange}/>
      </label>
    <label>bottom text<input value={meme.bottomtext} type='text' placeholder='walk into mordor' name='bottomtext' onChange={handlechange}/></label>
<button onClick={getmemeimage}>get a new meme image</button>
<div>
  <img src={meme.img}/>
  <span>{meme.toptext}</span>
  <span>{meme.bottomtext}</span>
  </div>
  </>
  )
}