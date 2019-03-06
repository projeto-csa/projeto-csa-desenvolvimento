import React from 'react'

const PostOwner = (props) => {
  var formatedDate = new Date(props.createdAt)
  return(
    <div>
      <img src={'http://i.pravatar.cc/24'} alt={props.user.username}/>
      <div>{props.user.username}</div>
      <div>{formatedDate.toLocaleString("pt-BR")}</div>
    </div>
  )
}
export default PostOwner
