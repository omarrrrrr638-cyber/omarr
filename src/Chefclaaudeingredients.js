export default function Ingredients(props){
  let ingr=props.ingredients.map((ele)=>{
  return <li key={ele}>{ele}</li>
})
  return(
    <>
    <section>
      <h2>ingredients on hand</h2>
    </section>
    <ul>
      {ingr}
    </ul>
{props.ingredients.length>3&&  (<div ref={props.ref}>
      <h3>ready for a recipe?</h3>
      <p>generate a recipe from your list of ingredients</p>
      <button onClick={props.togglerecipe}>get a recipe</button>
    </div>
)}
    </>
  )
}