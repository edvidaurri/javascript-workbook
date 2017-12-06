import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
stories: [],
}

componentDidMount(){
fetch
this.setState({stories: [...this.state.stories, story]})
// const newState = this.state.storires;
// newState.push(story);
// this.setState({stories: newState})
}
renderStories(){
return this.state.stories.map((story, key) => {
return <li key={key}>{story.title}</li>
})
}
render() {

return (
<div>
{this.renderStories()}
</div>
);
}
}

export default App;
import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
stories: [],
}

componentDidMount(){
fetch
this.setState({stories: [...this.state.stories, story]})
// const newState = this.state.storires;
// newState.push(story);
// this.setState({stories: newState})
}
renderStories(){
return this.state.stories.map((story, key) => {
return <li key={key}>{story.title}</li>
})
}
render() {

return (
<div>
{this.renderStories()}
</div>
);
}
}

export default App;
