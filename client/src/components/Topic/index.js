import React from 'react'
import ResponseList from '../ResponseList'
import ResponseForm from '../ResponseForm'
import responseFormStub from '../ResponseForm/stub.js'


const Topic = (props) => {
  return(
    <div className='Topic'>
      <div>Topic ID</div><div>{props.topic.topicID}</div>
      <div>Topic creator</div><div>{props.topic.topicCreatorID}</div>
      <div>Topic Name</div><div>{props.topic.topicName}</div>
      <div>Topic Description</div><p>{props.topic.topicDescription}</p>
      <ResponseList responses={props.topic.topicResponses} />
      <ResponseForm onClick={responseFormStub} />
    </div>
  )
}

export default Topic
