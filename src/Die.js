export default function Die(props){
return(<>
<button onClick={props.hold} style={{backgroundColor:props.isheld?"red":"green"}}>{props.value}</button>
</>)
}