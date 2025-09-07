import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import Joke from './Joke/Joke';
import Count from './Count';
import Contact from'./Contact/Contact';
import Head from './Head';
import Body from './Body';
import Pads from './Padsdata';
import Pad from'./Pad';
import Windowtracker from './Windowtracker';
import './index.css';
export default function Tagaroob(x){
  // var state='yes';
  // function handleclick(){
  //   state='no';
  // }
  // const result=useState();
  // const result=useState('hello');
  // let[results,func]=useState('omar');
  // results='sophia';
  // func('amora');
  // function handleclick(){
  //   func('amora');
  // }
  // console.log(result);
// let [count,setcount]=useState(0);
// function decreasecount(){
//   // setcount(count-1);
//   // setcount(count-1);
//   // setcount(count-1);
//   // setcount(count-1);
//   // setcount(count-1);
//   // setcount(count-1);
// setcount(function(prev){
//   return prev-1;
// })
// }
// function increasecount(){
//   // setcount(++count);
//   setcount(function(oldvalue){
//     return oldvalue+1;
//   })
//     setcount(function(oldvalue){
//     return oldvalue+1;
//   })
//     setcount(function(oldvalue){
//     return oldvalue+1;
//   })
//     setcount(function(oldvalue){
//     return oldvalue+1;
//   })
//     // setcount(count+1);
// }
// let answer;
// let isgoingout=true;
// (isgoingout?answer='yes':answer='no');
// let [isgoingout,setisgoingout]=useState(true);
// function toggle(){
// if(isgoingout){
//   setisgoingout(false);
// }else{
//   setisgoingout(true);
// }
// }
// const [myfavouritethings,setmyfavouritethings]=useState([]);
// const allfavouritethings=['omar','sophia','israa','mahmoud','gamal','youssef'];
// const thingselement=myfavouritethings.map(function(ele){
//   return <p>{ele}</p>
// })
// function addfavouritethings(){
//   setmyfavouritethings((prev)=>{
//   //  return  [...prev,'test']
//   return[...prev,allfavouritethings[prev.length]];
//   });
// }
// const [contact,setcontact]=useState({
//   firstname:'omar',lastname:'abdelaziz',phone:'01031751859',email:'omar247856@bue.edu.eg',isfavourite:false
// });
// let staricon=contact.isfavourite?'https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-filled.png?raw=true':'https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-empty.png?raw=true';
// function togglefavourite(){
// setcontact((prev)=>{
//   return{firstname:'omar',lastname:'abdelaziz',phone:'01031751859',email:'omar247856@bue.edu.eg',isfavourite:false,isfavourite:!prev.isfavourite};
// })
// }
// function submithandler(e){
// e.preventDefault();
// const formel=e.currentTarget;
// const formdata=new FormData(formel);
// const email=formdata.get('email');
// const password=formdata.get('password');
// console.log(email,password);
// formel.reset();
// }
// function signup(e){
// const email=e.get('email');
// const password=e.get('password');
// const status=e.get('same');
// const dietary=e.getAll('dietaryrestrictions');
// const favcolor=e.get('favcolor');
// console.log(Object.fromEntries(e));
// const data=Object.fromEntries(e);
// const dietary=e.getAll('dietaryrestrictions');
// const alldata={
//   ...data,dietaryrestrictions:dietary
// }
// console.log(dietary);
// console.log(alldata);
// // console.log(email,password,status,dietary,favcolor);
// }
// const [unreadmessages,setunreadmessages]=useState(['a','b']);
// let text;
// function determinetext(){
// if(unreadmessages.length==0){
//   text='you are all caugt up';
// }else if(unreadmessages==1){
//   text = `you have ${unreadmessages.length} unread message`;
// }
// else if(unreadmessages.length>1){
//   text=`you have ${unreadmessages.length} unread messages`;
// }
// return text;
// }
// const [count,setcount]=useState(0);
// function add(){
// setcount((count=>count+1));
// }
// function subtract(){
// setcount((count=>count-1));
// }
// return(
// <>
// <button onClick={subtract}>-</button>
// <Count number={count}/>
// <button onClick={add}>+</button>
{/* <div> */}
{/* {unreadmessages.length>0&&<h1>you have {unreadmessages.length} unread messages!</h1>}
{unreadmessages.length==0&&<p>you have {unreadmessages.length} unread messages!</p>} */}
{/* </div> */}
  {/* <Joke setup="I got my daughter a fridge for her birthday."  punchline="I can't wait to see her face light up when she opens it." upvotes={1+1} ispun={true} comments={[
    {author:'omar',body:'',text:'',title:''},    {author:'omar',body:'',text:'',title:''},    {author:'omar',body:'',text:'',title:''}
  ]}/>
  <Joke setup="Setup: How did the hacker escape the police?" punchline=" He just ransomware!" ispun={true}/>
  <Joke setup='Why' punchline="Scurvy." ispun={true}/>
  <Joke setup="Setup: Why do bees stay in the hive in the winter? "punchline=" Swarm." ispun={true}/>
  <Joke setup="What's the best thing about Switzerland?"punchline="I don't know, but the flag is a big plus!" ispun={true}/>  */}
{/* <h1>{determinetext()}</h1> */}
  {/* <h1>use state</h1> */}
  {/* <h1>do i feel</h1> */}
  {/* <button>{answer}</button> */}
  {/* <button onClick={handleclick}>{state}</button> */}
  {/* <button>{result[0]}</button>
  <button onClick={handleclick}>{results}</button> */}
{/* <div>
  <button onClick={decreasecount}>-</button>
  <h2>{count}</h2>
  <button onClick={increasecount}>+</button>
</div> */}
{/* <h1>{answer=isgoingout?'true':'false'}</h1> */}
{/* <button onClick={toggle}>{isgoingout?"yes":"no"}</button> */}
{/* <button onClick={function(){setisgoingout(!isgoingout)}}>{isgoingout?"yes":"no"}</button> */}
{/* <section>
  <button onClick={addfavouritethings}>add items</button>
{thingselement}
</section> */}
{/* <img src='https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/user.png?raw=true'/>
<div>
  <button onClick={togglefavourite}><img src={staricon}/></button>
  <h2>{contact.firstname} {contact.lastname}</h2>
  <p>{contact.phone}</p>
  <p>{contact.email}</p>
  </div> */}
{/* <form id='myform'>
  <label for='firstname'>first name:</label>
  <input type='text' id='firstname'/>
  <br/>
  <label for='lastname'>last name:</label>
  <input type='text' id='lastname'/>
  <br/>
  <input type='submit' value='submit'/>
</form> */}
{/* <h1>form</h1>
<form action={signup} onSubmit={submithandler} method='GET'>
  <label>Email:
  <input type='text' name='email'placeholder='Email'/>
</label>
<br/>
<label>password:
  <input type='password' name='password'/>
</label>
<input type='submit' value='click'/>
<button type='submit'>submit</button>
</form> */}
{/* <h1>form</h1>
<form action={signup}  method='GET'>
  <label>Email:
  <input type='text' defaultValue='omar247856' name='email'placeholder='Email'/>
</label>
<br/>
<label>password:
  <input type='password' defaultValue='123' name='password'/>
</label>
<br/>
<br/>
<label>description:
<textarea name='description' defaultValue='this is a description'></textarea>
</label>
<br/>
<fieldset>
  <legend>employment status</legend>
<label>
  unemployed
<input type='radio' name='same' value='unemploed'/>
</label>
<br/>
<label>
  part-time
<input type='radio'name='same' defaultChecked={true} value='part-time'/>
</label>
<br/>
<label>
  full-time
<input type='radio'name='same' defaultChecked={true} value='full-time'/>
</label>
</fieldset>
<fieldset>
  <legend>dietary restrictions</legend>
<label>
  kosher
<input type='checkbox' name='dietaryrestrictions'defaultChecked={true} value='kosher'/>
</label>
<br/>
<label>
  vegan
<input type='checkbox'name='dietaryrestrictions' defaultChecked={true} value='vegan'/>
</label>
<br/>
<label name='dietaryrestrictions'>
  gluten-free
<input type='checkbox'name='dietaryrestrictions' defaultChecked={true} value='gluten-free'/>
</label>
</fieldset>
<label>what is your favourite color?
  <select name='favcolor' defaultValue='indigo' required>
    <option value="" disabled>--choose a color--</option>
    <option>red</option>
    <option>green</option>
    <option>blue</option>
    <option>aqua</option>
    <option>white</option>
    <option>brown</option>
    <option>indigo</option>
  </select>
</label>
<input type='submit'/>
</form> */}
//  </>
  // )
  // const [username,setusername]=useState('omar');
  // const [pads,setpads]=useState(Pads);
  // function turnallpadsoff(){
  //   setpads(prev=>prev.map(ele=>{return {
  //     ...ele,on:false}
  // }))
  // }
  // function toggle(id){
  //   setpads((prev)=>prev.map(ele=>{
  //    return ele.id===id?{...ele,on:!ele.on}:ele
  //   }))
  //   console.log(id.currentTarget);
  //   console.log('clicked');
  //   console.log(id);
  // }
  // const padss=pads.map((ele)=>{
  // return(<><Pad color={ele.color} id={ele.id} toggle={toggle} on={ele.on}/></>)
  // })
//   let [state,setstate]=useState(null);
//   const [count,setcount]=useState(1);
// console.log('data');
// useEffect(function(){
//     console.log('dataثببثؤف');
//     fetch("https://swapi.py4e.com/api/people/1").then(
//     res=>res.json()
//   )
//   .then(data=>setstate(data));
// },[count])
// useEffect(function(){
//     console.log('dataثببثؤف');
//     fetch(`https://swapi.py4e.com/api/people/${count+2}`).then(
//     res=>res.json()
//   )
//   .then(data=>setstate(data));
// },[count]);
// useEffect(function(){
//     console.log('dataثببثؤف');
    // fetch("https://swapi.py4e.com/api/people/1").then(
  //   res=>res.json()
  // )
  // .then(data=>setstate(data));
// },[count])
// const[show,setshow]=useState(true);
// function toggle(){
//   setshow((prev)=>!prev);
// }
  return(
    <>
    {/* <button onClick={toggle}>toggle window</button>
    {show&&<Windowtracker/>}
     */}
    {/* <h2>count is {count}</h2>
    <button onClick={()=>setcount(prev=>prev+1)}>add</button>
    <pre>{JSON.stringify(state,null,2)}</pre> */}
    {/* <pre>{JSON.stringify(state,null,2)}</pre> */}
    {/* <Contact/> */}
    {/* <h1>omar</h1>
    <p>{username}</p> */}
    {/* <Head username={username}/>
    <Body username={username}/> */}
{/* {padss}
<button onClick={turnallpadsoff}>off</button> */}
    </>
  )
}