import React, { Component } from 'react';
import './App.css';


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

//Text field where name label moves to top.const TextFieldExampleSimple = () => (



//Raised buttons.
  const style = {
  margin: 12,
  };



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

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <div>
          <TextField
          floatingLabelText="Name"
          />
        </div>
        <div>
          <RaisedButton label="Primary" primary={true} />
          <RaisedButton label="Secondary" secondary={true}style={style} />

          <br/><br/><br/>
          <RaisedButton label="Full width" fullWidth={true} />
        </div>
      </div>
    </Router>


    );
  }
}

export default App;
