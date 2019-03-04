import React from 'react'

class ResponseForm extends React.Component {
  constructor(){
    super()
    this.state = {
      response: undefined
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({response: e.target.value})
  }

  onClick = (responseText) => {
    return () => {
      this.setState({response: ''})
      this.props.onClick({topico: this.props.topico, resposta: responseText}, this.props.newAnswer)
    }
  }

  render(){
    return(
      <div className='ResponseForm'>
        <div>Sua resposta:</div>
        <input type='text' onChange={this.handleChange} value={this.state.response}/>
        <input type='submit' onClick={this.onClick(this.state.response)} value='Enviar'/>
      </div>
    )
  }
}

export default ResponseForm
