import React from 'react'
import Button from '@material-ui/core/Button'

const RoutineListItem = (props) => {

  return(
    <h3>{props.routine.nome}</h3>
  )
}

export default RoutineListItem
