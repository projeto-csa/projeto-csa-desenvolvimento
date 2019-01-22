import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CommentBox from './components/CommentBox'
import TestPage from './components/TestPage'

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/comment" component={CommentBox} />
          <Route exact path="/testPage" component={TestPage} />
        </div>
      </Router>
    )
  }
}

export default App
