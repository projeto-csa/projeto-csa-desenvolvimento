import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CommentBox from './components/CommentBox';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/comment" component={CommentBox} />
        </div>
      </Router>
    )
  }
}

export default App
