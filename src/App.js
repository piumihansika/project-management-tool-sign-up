import React, { Component } from 'react';
import Signup from './Components/Signup';
import './App.css';

class App extends Component {
render() {
 return (
      <div className="App">
      <header className="App-header">
          <h1 className="App-title">ManageMint Sign Up</h1>
      </header>
           <div className="container">
           
            <Signup/>
            
  </div>
  </div>


      );
     }
   }

export default App;
