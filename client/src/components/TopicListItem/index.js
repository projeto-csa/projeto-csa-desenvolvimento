import React from 'react'
import Button from '@material-ui/core/Button'

const TopicListItem = (props) => {

  return(
    <h3>{props.topic.titulo}</h3>
  )
}

export default TopicListItem
