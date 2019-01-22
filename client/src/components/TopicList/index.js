import React from 'react'
import TopicListItem from '../TopicListItem'

const TopicList = (props) => {
  return(
    <div className="TopicList">
    {props.topics.map((item, index) =>
      <TopicListItem topic={item} key={index} />
    )}
    </div>
  )
}
export default TopicList
