import React from 'react'

import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'

const style={
  textAlign: 'center'
}

const SearchBar = (props) =>{
  return(
    <div style={style}>
      <InputBase placeholder="Pesquisar…"/>
      <SearchIcon />
    </div>
  )
}
export default SearchBar
