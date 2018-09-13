import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends Component {

  constructor () {
    super()
    this.state = {
      result: [],
      comments: []
    }

    this.handleClick = this.handleClick.bind(this)
    
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({result: response.data}))
  }

  handleClick(postId) {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments' )
      .then(response => this.setState({comments: response.data}))
  }

  render() {
    return (
      <div className="App">
        <div className='rows'>
          <div className='row'>
            <form id="form1" className="mb-4">
              <label htmlFor="hello">Post Sample</label>
              <br/><br/><br/>
              {
                this.state.result.map((post) => <p onClick={() => this.handleClick(post.id)}>{post.title}<br/><br/><br/></p>)
              }
              <input type="text" />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            
          </div>
          <div className='row'>
            <form id="form1" className="mb-4">
              <br/><br/><br/>
              <label htmlFor="hello">Comment Sample</label>
              {
                  this.state.comments.map((comment) => <p>{comment.name}<br/><br/><br/></p>)
              }
              <input type="text" />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
