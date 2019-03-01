import React from 'react'

const styles = {
  container:{
    textAlign: 'center'
  },
  imgStyle:{
    borderRadius: '80px'
  }
}

const UserPortrait = () => {
  let comissoes = ['Convivência', 'Acolhimento', 'Comunicação', 'Comunicação', 'Financeiro']
  let random
  return(
    <div style={styles.container}>
      <img src={'http://i.pravatar.cc/80'} style={styles.imgStyle}/>
      <div>Nome</div>
      <div>função</div>
      {Math.random() > 0.5 && <div>Info</div>}
      {(random = (Math.random()*10) % comissoes.length) && <div>{comissoes[random]}</div>}
    </div>
  )
}

export default UserPortrait
