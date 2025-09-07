// import { useState,useRef ,useEffect} from "react";
// import Classrecipe from './ClassRecipeComponent.js';
// import Ingredients from "./Chefclaaudeingredients.js";
// import{getRecipeFromChefClaude,getRecipeFromMistral}from'./ai';
// export default function Form(){
// let [ingredients,setingredients]=useState([]);
// let ingr=ingredients.map((ele)=>{
//   return <li key={ele}>{ele}</li>
// })
//   function submit(e){
//     e.preventDefault();
//     const formdata=new FormData(e.target);
//     const newingredient=formdata.get('ingredient');
//     setingredients((prev)=>{
//     return  [...prev,newingredient];
//     })
//     e.target.reset();
//   }
//   const [recipeshown,setrecipeshown]=useState("");
//   const recipesection=useRef(null);
//   console.log(recipesection);
// useEffect(function(){
// if(recipeshown!==''&&recipesection.current!=null){
// recipesection.current.scrollIntoView({behavior:'smooth'});
// }
// },[recipeshown])
// async function showrecipe(){
// const recipe=await getRecipeFromMistral(ingredients);
// console.log(recipe);
// setrecipeshown(recipe);
// }
//   return(
//     <>
//     <form onSubmit={submit}>
//       <input type='text' placeholder='e.g. oregano' name='ingredient'/>
//       <button type='submit'>add ingredients</button>
//     </form>
// {ingredients.length>0&&(<Ingredients ref={recipesection} ingredients={ingredients} togglerecipe={showrecipe}/>
// )}{recipeshown&&
// <Classrecipe recipe={recipeshown}/>}
// </>)
// }