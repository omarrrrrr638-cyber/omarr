// export default function Contact(x){
//   console.log(x);
//   const person={
//     name:'omar',age:20,education:'university'
//   }
//   const{name:Name,age}=person;
//   console.log(Name);
//   console.log(age);
//  return (
//         <div className="contacts">
//             <article>
//             <img src={x.img}></img>
//             </article>
//             <h3>{x.name}</h3>
//             <p>{x.phone}</p>
//             <p>{x.email}</p>
//         </div>
//     )
// }
import {useState} from 'react';
import Star from './Star';
export default function Contact(){
  const [contact,setcontact]=useState(
    {
      firstname:'omar',lastname:'abdelaziz',phone:'01094661249',email:'omar247856@bue,edu.eg',isfavourite:true
    }
  )
  function togglefavourite(){
    setcontact((prev)=>{return{...prev,isfavourite:!prev.isfavourite}});
  }
return (
        <div className="contacts">
            <article>
            <img src='https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/20.%20Complex%20state%20-%20updating%20state%20objects/images/user.png?raw=true'></img>
            </article>
            <Star isfilled={contact.isfavourite} onClick={togglefavourite}/>
            <h3>{contact.firstname}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
}