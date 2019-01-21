import React from 'react'

const TopicListItem = (props) => {
  return(
    <div className="TopicListItem">
      <h3>{props.topic.topicName}</h3>
      <p>{props.topic.topicDescription}</p>
    </div>
  )
}

export default TopicListItem
