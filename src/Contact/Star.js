import {useState} from 'react';
export default function Star(props){
    return(<> 
    <button onClick={props.onClick}>
      <img src={props.isfilled?'https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/20.%20Complex%20state%20-%20updating%20state%20objects/images/star-filled.png?raw=true':'https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/20.%20Complex%20state%20-%20updating%20state%20objects/images/star-empty.png?raw=true'}/>
    </button>
      </> )
}