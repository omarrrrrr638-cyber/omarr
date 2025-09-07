import Die from './Die';
import {useState}from 'react';
import { nanoid } from "nanoid"
import Confetti from 'react-confetti';
export default function Tenzies1(){
  function generateallnewdice(){
    console.log(2);
    return new Array(10).fill(0).map((ele,index)=>({value:Math.ceil(Math.random()*6),isheld:false,id:nanoid()}));
  }
  const[state,setstate]=useState(()=>generateallnewdice());
  function roll(){
    if(!gamewon){
    setstate(old=>old.map(die=>die.isheld?die:{...die,value:Math.ceil(Math.random()*6)}));}else{
      setstate(generateallnewdice());
    }
  }
  function hold(id){
setstate(old=>{
  return old.map(die=>{
    if(die.id===id){
      return {...die,isheld:!die.isheld};
    }else{
      return die;
    }
  })
})
  }
const  gamewon=state.every(die=>die.isheld)&&state.every(die=>die.value===state[0].value);
  return(<>
  {gamewon&&<Confetti/>}
  <main>
    {state.map(dieobject=><Die value={dieobject.value} isheld={dieobject.isheld} hold={()=>hold(dieobject.id)}id = {dieobject.id}/>)}
    <button onClick={roll}>{gamewon?"new game":'roll'}</button>
  </main></>);
}