import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CommentBox from './components/CommentBox';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Route exact path="/comment" component={CommentBox} />
        </div>
      </Router>
    )
  }
}

export default App
