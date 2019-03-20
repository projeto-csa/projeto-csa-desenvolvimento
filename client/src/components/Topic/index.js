import React from 'react'
import Response from '../Response'
import ResponseForm from '../ResponseForm'
import PostOwner from '../PostOwner'
import answerRequest from './answerRequest'
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
    this.setState({topic: temp})
  }

  render(){
    const { topic } = this.state
    const { rotinas } = this.state
    return(
      <div className='Topic'>
        <h4>Rotinas relacionadas</h4>
        { rotinas ? <RoutineList rotinas={rotinas} /> : null }
        <h1>{topic.titulo}</h1>
        <PostOwner user={topic.user} createdAt={topic.createdAt}/>

        <div>{topic.descricao}</div>
        <hr/>
        { topic.respostas ?
          <div>
            {topic.respostas.map((item, index) =>
              <Response response={item} key={index} />
            )}
          </div>
          : null
        }
        <ResponseForm onClick={answerRequest} topico={topic._id} newAnswer={this.newAnswer}/>

      </div>
    )
  }
}

export default Topic
//<ResponseForm onClick={responseFormStub} />
