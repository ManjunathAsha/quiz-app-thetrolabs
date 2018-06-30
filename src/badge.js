
import React from 'react';
import { ControlLabel ,FormGroup ,Badge,Label } from 'react-bootstrap';


export default class BadgeTag extends React.Component {

getAnswer(question){
  console.log(question);
  let success={
    "background-color" :"green important!"
  }

  let warning={
    "background-color" :"red important!"
  }
if(!question.iscorrect){
  return <p> <Label bsStyle="success">Correct</Label></p>;
}else{
return <p> <Label bsStyle="danger">Incorrect</Label></p>;
}
}

render(){
const {isubmitted , question}=this.props;
return (
  !isubmitted && <div>{this.getAnswer(question)}</div>);

}

}
