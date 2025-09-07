import { useState } from "react";
import Padsdata from "./Padsdata"
export default function Pad(props){
  console.log(props.on);
  // function toggle(){
  //   setstate((prev)=>!prev);
  // }
return(
  <>
  <button onClick={()=>props.toggle(props.id)} className={props.on?'on':'off'} style={{backgroundColor:props.color}}></button>
  </>
)
}