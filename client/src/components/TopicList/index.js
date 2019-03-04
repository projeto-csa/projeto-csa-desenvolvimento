import React from 'react'
import TopicListItem from '../TopicListItem'
import requestTopics from './request.js'
//import requestTopic from './requestTopic.js'
//import Topic from '../Topic'
import { Link } from 'react-router-dom'

class TopicList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTopic: {},
      topicos: props.topicos
    }
    if(!this.state.topicos) requestTopics(this.handleData)
  }

  handleData = (data) => {
    this.setState({topicos: data})
  }

  render(){
    const { topicos } = this.state
    return(
      <div>
        { topicos ?
          this.state.topicos.map((item, index) =>
          <Link to={{pathname: `/topico/${item._id}`, state: item}} key={index}>
            <TopicListItem topic={item}/>
          </Link>
        ) : null}
      </div>
    )
  }
}
export default TopicList
//${this.props.match.url}

//${this.props.match.path}
