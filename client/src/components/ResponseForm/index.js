import React from 'react'

const ResponseForm = (props) => {
  return(
    <div className='ResponseForm'>
      <div>Sua resposta:</div>
      <input type='text' />
      <input type='submit' onClick={props.onClick} value='Enviar'/>
    </div>
  )
}

export default ResponseForm
