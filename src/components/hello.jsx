import { Alert } from "react-bootstrap";

function Hello (props){
  const {who, age, ques} = props
  return(
    <>
      <h2>Hello, {who? `${who}`:`Ban`}! {age?`Age ${age}` : ``}</h2>
      {
        ques && <Alert variant="dark">{ques}</Alert>
      }
    </>
  )
}


export default Hello;
