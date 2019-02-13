import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CommentBox from './components/CommentBox'
import TestPage from './components/TestPage'
import TopicList from './components/TopicList'
import RoutineList from './components/RoutineList'
import Routine from './components/Routine'
import Topic from './components/Topic'
import Register from './components/Register'
import Login from './components/Login'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <ul>
            <li key={0}><Link to='/'>Home</Link></li>
            <li key={1}><Link to='/register'>Register</Link></li>
            <li key={2}><Link to='/login'>Login</Link></li>
            <li key={3}><Link to='/topicos'>Topicos</Link></li>
            <li key={4}><Link to='/rotinas'>Rotinas</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/comment" component={CommentBox} />
          <Route exact path="/testPage" component={TestPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/topicos" component={TopicList} />
          <Route exact path="/rotinas" component={RoutineList} />
          <Route path="/rotina/:routineId" component={Routine}/>
          <Route path="/topico/:topicoId" component={Topic} />

        </div>
      </Router>
    );
  }
}

export default App;
