import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BasicInfo from './BasicInfo/BasicInfo';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      person: [
        {
          name:"Jordan Howard",
          dateOfBirth: "August 31 1995",
          phoneNumber: "555-555-5555"
        },
        {
          name:"LaPhaedra Howard",
          dateOfBirth: "Jan 20 1967",
          phoneNumber: "888-999-4564"
        },
        {
          name:"Louis Esposito",
          dateOfBirth: "August 20 1995",
          phoneNumber: "754-568-9654"
        }
      ] 
    }
  }

  render() {
    return (
      <div>
        <BasicInfo
        name={this.state.person[0].name}
        dateOfBirth={this.state.person[0].dateOfBirth}
        phoneNumber={this.state.person[0].phoneNumber}/>
      </div>
    )
  }
}

export default App;
