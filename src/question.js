import React from 'react';
import Answer from './answer';
import { ControlLabel,Row ,Panel ,FormGroup ,FormControl } from 'react-bootstrap';
import BadgeTag from './badge'

export default class Question extends React.Component {

constructor(){
  super();
  this.state = {
              messageShown: false,
              iscorrect:false
  };
}

handler(value,evnt) {
let isCorrect=true;
    value.answers.map((item)=>{
      if(item.correct && item.answer===evnt){
        isCorrect=false;
          console.log(value,evnt);
      }
    })
    if(isCorrect){
      value.iscorrect=true;
    }else{
      value.iscorrect=false;

    }

}
isub(val){
  console.log("val");
}

    render () {
         const {sanbox,isubmitted} = this.props;
         console.log(this.props);

         let optionItems = sanbox.map((question) =>

  <Panel>
    <Panel.Heading><div width="100" style={{display: 'flex',  justifyContent:'left', alignItems:'left', width: '100vh'}}>{question.id}.{question.question}<BadgeTag width="20" isubmitted={isubmitted} question ={question} /></div></Panel.Heading>
    <Panel.Body>
      <FormGroup  controllid={question.id}>
   <Answer cntrlId={question.id} action={this.handler} question={question} answers={question.answers} />
     </FormGroup>
    </Panel.Body>
  </Panel>

  );

        return (
         <Row className="show-grid">
        {optionItems}
      </Row>
        )
    }
}
