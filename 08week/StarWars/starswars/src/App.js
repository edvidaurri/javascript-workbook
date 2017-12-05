import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 state = {
     characters: null
 }
 componentDidMount(){
    const that = this;
    fetch('https://pokeapi.co/api/v2/pokemon-form/')
        .then((response) => response.json())
        .then((responseJson) => {
            that.setState({characters: responseJson.results})
        })
        .catch((error) => {
            console.error(error);
        });
 }
 constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
 renderCharacters(){
     const { characters } = this.state;
     if(characters && characters.length > 0){
         return characters.map((obj, key) =>{
             return <p key={key}>{obj.name}</p>
         })
     }
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokemon</h1>
        </header>
          {this.renderCharacters()}
      </div>
    );
  }
}

export default App;
