import React from 'react'
import PostOwner from '../PostOwner'

const Response = (props) => {
  return(
    <div className='Response'>
      <PostOwner user={props.response.user} createdAt={props.response.createdAt}/>
      <p>{props.response.resposta}</p>
      <hr/>
    </div>
  )
}

export default Response
