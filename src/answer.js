import React from 'react';
import { ControlLabel ,FormGroup ,FormControl } from 'react-bootstrap';


export default class Answer extends React.Component {
    constructor() {
        super();
    }

    render () {
        let {cntrlId,question,answers} = this.props;
        let optionItems = answers.map((answer) =>
                <option key={answer.id}>{answer.answer}</option>);
          let handler= this.props.action;
        return (
         <div>
             <FormControl componentClass="select" question={question} onChange={(e)=>handler(question,e.target.value)}>
                {optionItems}
             </FormControl>
         </div>
        )
    }
}
