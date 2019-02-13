import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

import TextBlock from '../TextBlock'
import SearchBar from '../SearchBar'
import { Grid, Cell } from 'styled-css-grid'
import Button from '@material-ui/core/Button'
import someText from './someText'



const styles = {
  container:{
    marginLeft: '150px',
    marginRight: '150px'
  },
  gridContainers:{
    width: '300px',
    textAlign: 'center',
    margin: 'auto'
  },
  verbBox:{
    background: 'rgba(19, 197, 80, 0.15)',
    textAlign: 'center',
    height: '50px',
  },
  discBox:{
    background: 'rgba(19, 197, 80, 0.15)',
    height: '50px',
  },
  textBlock:{
    style:{},
    titleStyle:{
      textAlign: 'center'
    },
    textStyle:{
      left: '20px',
      margin: 'auto'
    }
  }
}

const Home = () => {
  const someTitle = 'Texto sobre o que é a plataforma'
  const createCells = () => {
    let gridCells = []
    for(var i = 0; i < 9; i++){
      gridCells.push(
        <Cell style={styles.verbBox} width={1} key={i} middle>
          Verbete
        </Cell>
      )
    }
    return gridCells
  }
  const createRows = () => {
    let rows = []
    for(var i = 0; i < 3; i++){
      rows.push(
        <Cell style={styles.discBox} height={1} key={i}>
          Discussão
        </Cell>
      )
    }
    return rows
  }
  return(
    <div>

      <TextBlock styles={styles.textBlock} title={someTitle} text={someText}/>
      <SearchBar />
      <Grid style={styles.container} columns={2}>
        <Cell style={styles.gridContainers} width={1} key={0}>
          <h3>Principais Verbetes</h3>
          <Grid columns={3}>
            {createCells()}
          </Grid>
          <Button>Seguir para o que é CSA</Button>
        </Cell>
        <Cell style={styles.gridContainers} width={1} key={1}>
          <h3>Principais discussões</h3>
          <Grid flow="row dense" columns={1}>
            {createRows()}
          </Grid>
          <Button>Seguir para fórum principal</Button>
        </Cell>
      </Grid>
    </div>
  )
}

export default Home
