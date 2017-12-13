import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stories: [],
}



componentDidMount(){
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then(storyIds => {
  storyIds.slice(0, 15).forEach((storyId) => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
    .then(res => res.json())
    .then(story => {
console.log(story);
      })
    });
  });
}

// Syntax error: Unexpected token (27:4)

this.setState({stories: [...this.state.stories, story]})
const newState = this.state.storires;
newState.push(story);
this.setState({stories: newState})


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
