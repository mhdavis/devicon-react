import React, { Component } from 'react';
import Devicon from "./Devicon/Devicon";
import "./Devicon/Devicon.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Devicon  name="amazonwebservices" size="7rem" logoStyle="original" colored={true}/>
        <Devicon iconClass="ang-icon" color="magenta" name="angularjs" logoStyle="plain" wordmark={false}/>
        <Devicon name="backbonejs" size="7rem" logoStyle="plain" wordmark={true} colored={true}/>
        <Devicon name="c" size="7rem" logoStyle="line" colored={false}/>
      </div>
    );
  }
}

export default App;
