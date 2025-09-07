import ReactMarkdown from 'react-markdown';
export default function Class(props){
  return(
    <>
    <ReactMarkdown>{props.recipe}</ReactMarkdown></>
  )
}