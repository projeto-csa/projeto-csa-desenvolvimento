import React from 'react'
import PostOwner from '../PostOwner'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

const Response = (props) => {
  console.log(props.response.user)
  return(
    <div className='Response'>
      <PostOwner user={props.response.user} createdAt={props.response.createdAt}/>
      <p>{props.response.resposta}</p>
      <Button><DeleteIcon /></Button>
      <hr/>
    </div>
  )
}

export default Response
