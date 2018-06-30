import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './question';
import { Grid , Button ,Row ,ButtonToolbar } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
      super(props);
      this.state= {
        loading: true,
        isubmitted:true
      }
  }
    componentDidMount() {
      let questionAnswers = [];
      fetch('https://jsonblob.com/api/jsonBlob/4fcefe4b-6e29-11e8-b3c1-79fb9edfd311')
          .then(response => {
              return response.json();
          }).then(data => {
            //  questionAnswers = data;
              console.log(data);
              this.setState({
                questionAnswers: data,
                loading: false,
                isubmitted:true
              });
          });
  }

update=()=>{
  this.setState({
    loading: false,
    isubmitted:false
  });
}

updateClr=()=>{
  this.setState({
    loading: false,
    isubmitted:true
  });
}


  render() {
    const { loading ,questionAnswers,isubmitted} = this.state;
    return (
      !loading && <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Quiz App</h1>
        </header>
        <br/>
        <Grid>
        <form>
        <Question isubmitted={isubmitted} sanbox = {questionAnswers} />

        <div className="btn-margin">
    <Button bsStyle="primary" onClick={this.update} bsSize="large" >
    Submit
    </Button>
    <span>     </span>
    <Button bsSize="large" onClick={this.updateClr} >Clear</Button>
  </div>
      </form>
      </Grid>
      </div>
    );
  }
}

export default App;
