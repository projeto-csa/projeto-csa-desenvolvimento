import React from 'react'

import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'


const SearchBar = (props) =>{
  return(
    <div>
      <SearchIcon />
      <InputBase placeholder="Search…"/>
    </div>
  )
}
export default SearchBar
