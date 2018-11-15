import React from 'react'

const TextBlock = (props) =>{
  return(
    <div className="TextBlock">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default TextBlock
