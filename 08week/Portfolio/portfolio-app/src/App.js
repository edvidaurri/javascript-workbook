import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import About from './About';
import Home from './Home';

//Hamburger Menu
const IconMenuExampleSimple = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Send feedback" animated/>
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>

  </div>
);

//Text field where name label moves to top.
const TextFieldExampleSimple = () => (
  <div>
    <TextField
    floatingLabelText="Name"
    />
  </div>
);

//Raised buttons.
  const style = {
  margin: 12,
  };
const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Primary" primary={true} />
    <RaisedButton label="Secondary" secondary={true}style={style} />

    <br/><br/><br/>
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
  );
  //Destructuring JavaScript Objects.
  const person = {
first: 'Eddie',
last: 'Vidaurri',
country: 'USA',
city: 'Austin',
};


const { first, last, country, city } = person;
console.log(first, city, country, last);

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>

      </div>
    </Router>


    );
  }
}

export default App;
