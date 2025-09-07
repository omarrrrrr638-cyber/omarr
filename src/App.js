import logo from './logo.svg';
import './App.css';
import Mainapp from './Mainapp';
import Navbar from './Navbar';
import Header from './Components/Header2';
import Entry from './Components/Entry';
import Contact from './Contact/Contact';
import Joke from './Joke/Joke';
import Jokesdata from './Joke/Jokesdata';
import Traveljournal from './Traveljournal';
import Chefclaudeheader from './HeadercomponentChefclaude.js';
import Form from './Formchefclaude';
import Tagaroob from './Tagaroob';
// export default function App() {
// return(<>
//   <h1>app</h1>
//   <Mainapp/>
//   <Navbar/>
//   </>
// )
// }
export default function App(){
// console.log(Jokesdata);
// const jokeelements=Jokesdata.map((joke)=>{
// return(<>
// <Joke setup={joke.setup} punchline={joke.punchline}/>
// </>)
// })
// return(
//   <>
//   {jokeelements}
//   </>
// )
  // const firstname='omar';
  // const lastname='abdelaziz';
  // const hours=new Date().getHours();
  // let timeofday;
  // if(hours<12){
  //   timeofday='morning';
  // }
  // else if(hours>=12&&hours<17){
  //   timeofday='afternoon'
  // }else if(hours<21){
  //   timeofday='evening'
  // }
  // else{
  //   timeofday='night';
  // };
  // const ninjaturtles=[<h2>disney</h2>,'nothing','baraam','tyour elgana'];
  // return(<>
{/* <Header/>
<Entry/> */}
{/* <h1>hello {firstname+' '+lastname}   {new Date().getHours()} {new Date().getHours()%12} {timeofday}</h1> */}
//  <Contact img='https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png?raw=true'name='mr.wiskerson'phone='(212) 555-1234' email='mr.whiskaz@catnap.meow'/>
// <Contact img='https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/fluffykins.png?raw=true'name='mr.s'phone='(212) 555-2345
// ' email='mr.whiskaz@catnap.meow'/>
// <Contact img='https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png?raw=true'name='mr.wiskerson'phone='(212) 555-4567

// ' email='mr.whiskaz@catnap.meow'/>
// <Contact img='https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png?raw=true'name='mr.wiskerson'phone='(0800) CAT KING' email='mr.whiskaz@catnap.meow'/>
// <Contact img='https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png?raw=true'name='mr.wiskerson'phone='(212) 555-1234

// ' email='mr.whiskaz@catnap.meow'/>
// <Contact img='https://github.com/scrimba/learn-react/blob/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png?raw=true'name='mr.wiskerson'phone='(212) 555-1234' email='mr.whiskaz@catnap.meow'/> 
{/* <main> */}
  // <Joke setup="I got my daughter a fridge for her birthday."  punchline="I can't wait to see her face light up when she opens it." upvotes={1+1} ispun={true} comments={[
  //   {author:'omar',body:'',text:'',title:''},    {author:'omar',body:'',text:'',title:''},    {author:'omar',body:'',text:'',title:''}
  // ]}/>
  // <Joke setup="Setup: How did the hacker escape the police?" punchline=" He just ransomware!" ispun={true}/>
  // <Joke setup='Why' punchline="Scurvy." ispun={true}/>
  // <Joke setup="Setup: Why do bees stay in the hive in the winter? "punchline=" Swarm." ispun={true}/>
  // <Joke setup="What's the best thing about Switzerland?"punchline="I don't know, but the flag is a big plus!" ispun={true}/>
{/* </main> */}
{/* <Header/>
<main> */}
  // <Entry img={{src:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_fZh1LHBd1fzSKRbAqsdStbrDedPx6zg1VOjUvalyWihaxgHAfUGfr4K0yuLPa7RqnPi5wvYk95o6mYBlGgZgMsrVJO6Nl6gJt6qcnpDMXl54jZu1N7HBSwYWd7q4aTG5XKRZ=w408-h422-k-no',alt:'mount fuji again'}} title='mount fuji' country='japan' googlemapslink='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu' dates='12 Jan, 2021 - 24 Jan, 2021' text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'/>
{/* </main> */}
{/* <main>
  {['omar','sophia']}
  {ninjaturtles}
  {ninjaturtles.map((nt)=>`<h2>${nt}</h2>`)}
</main> */}
{/* <main>

</main>
</>) */}
// const entryelements=Traveljournal.map((ele,index)=>{
//   return(
//     <><Entry key={index} id={ele.id} img={ele.img} title={ele.title} country={ele.country} googlemaps={ele.googlemapslink} dates={ele.dates} text={ele.text}  /></>
//   )
// })
// return(
//   <>
//   <Header/>
// {entryelements}
// </>
// )
// const entryelements=Traveljournal.map((ele,index)=>{
//   return(
//     <><Entry obj={ele}  /></>
//   )
// })
// return(
//   <>
//   <Header/>
// {entryelements}
// </>
// )
// const obj1={name:'omar',age:20};
// const entryelements=Traveljournal.map((ele,index)=>{
//   return(
//     <><Entry key={index} {...ele} {...obj1} /></>
//   )
// })
// return(
//   <>
//   <Header/>
// {entryelements}
// </>
// )
// function handleclick(){
// console.log('i was clicked');
// }
// function handlemouseover(){
//   console.log('mouse over')
// }

return(<>
{/* <Tagaroob/> */}
{/* <Chefclaudeheader/>
<Form/> */}
{/* <img src='https://lh3.googleusercontent.com/gps-cs-s/AC9h4np_fZh1LHBd1fzSKRbAqsdStbrDedPx6zg1VOjUvalyWihaxgHAfUGfr4K0yuLPa7RqnPi5wvYk95o6mYBlGgZgMsrVJO6Nl6gJt6qcnpDMXl54jZu1N7HBSwYWd7q4aTG5XKRZ=w408-h422-k-no' onMouseOver={handlemouseover}/>
<button onClick={function(){
  console.log('clicked')
}}>click me</button>
<button onClick={handleclick}>click me</button> */}
{/* <Tagaroob/> */}









</>
)
}

