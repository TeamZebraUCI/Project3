import React, { Component } from 'react';
import Title from './components/Title/Title'
import Notes from './components/Notes/Notes'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
       <Title>Project 3 Title</Title>
          <Notes />
          
  </div>
    );
  }
}

export default App;
