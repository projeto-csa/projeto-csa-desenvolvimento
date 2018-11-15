import React from 'react'
import TextBlock from '../TextBlock'
import SearchBar from '../SearchBar'

const Home = () => {
  const someTitle = 'Texto sobre o que é a plataforma'
  const someText = 'Loren ipsum loren ipsum loren ipsum loren ipsum'

  return(
    <div>
      <TextBlock title={someTitle} text={someText}/>
      <SearchBar />
    </div>
  )
}

export default Home
