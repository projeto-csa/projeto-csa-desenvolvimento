import React from 'react'
import ResponseList from '../ResponseList'
import ResponseForm from '../ResponseForm'
import putRequest from './putRequest'
import request from './request'
import RoutineList from '../RoutineList'

class Topic extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      topic: props.location.state,
      rotinas: undefined
    }
    request(this.state.topic.rotina, this.handleData)
  }

  handleData = (data) => {
    this.setState({rotinas: data})
  }

  newAnswer = (answer) => {
    let temp = this.state.topic
    if(!temp.respostas) temp.respostas = [answer]
    else temp.respostas = [answer, ...temp.respostas]
    console.log("temp.respostas: ", temp.respostas)
    this.setState({topic: temp})
  }

  render(){
    const { topic } = this.state
    const { rotinas } = this.state
    console.log('rotinas do topico: ', this.state.rotinas)
    return(
      <div className='Topic'>
        <h1>{topic.titulo}</h1>
        <div>{topic.descricao}</div>
        <h3>Metadados</h3>
        <div>Topic ID</div>
        <div>Topic creator</div>
        { topic.respostas? <ResponseList responses={topic.respostas} /> : null }
        <ResponseForm onClick={putRequest} topico={topic._id} newAnswer={this.newAnswer}/>
        <h3>Rotinas relacionadas</h3>
        { rotinas ? <RoutineList rotinas={rotinas} /> : null }
      </div>
    )
  }
}

export default Topic
//<ResponseForm onClick={responseFormStub} />
