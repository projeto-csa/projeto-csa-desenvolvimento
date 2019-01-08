import React from 'react'

const Response = (props) => {

  return(
    <div className='Response'>
      <div>TopicID:</div><div>{props.response.topicID}</div>
      <div>UserID:</div><div>{props.response.userID}</div>
      <div>MessageID:</div><p>{props.response.message}</p>
      <div>Created at:</div><div>{props.response.createdAt}</div>
      <div>Updated at:</div><div>{props.response.updatedAt}</div>
    </div>
  )
}

export default Response
