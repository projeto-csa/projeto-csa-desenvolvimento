import React from 'react'
import Response from '../Response'

const ResponseList = (props) => {
  const createResponses = (responses) => {
      return(
        responses.map((item, index)=>{
          return <Response response={item} key={index} />
        })
      )
  }

  return(
    <div className='ResponseList'>
      {createResponses(props.responses)}
    </div>
  )
}

export default ResponseList
