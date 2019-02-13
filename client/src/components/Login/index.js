import React from 'react'
import { Redirect } from 'react-router-dom'
import request from './request'

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      identifyer: '',
      password: '',
      redirect: false
    }
  }

  emailChange = (e) => {
    this.setState({email: e.target.value})
  }

  passwordChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleData = (data) => {
    console.log(data)
    localStorage.setItem('token', data.jwt)
  }

  onClick = () => {
    let payload = {
      identifier: this.state.email,
      password: this.state.password
    }
    request(payload, this.handleData)
    this.setState({redirect: true})
  }


  render(){
    return(
      <div>
        <h1>Login</h1>
        <input type='text' placeholder='Usuário' onChange={this.emailChange}/><br/>
        <input type='password' placeholder='Senha' onChange={this.passwordChange}/><br/>
        <input type='submit' onClick={this.onClick}/>
        {this.state.redirect ? <Redirect to='/' /> : null}
      </div>
    )
  }
}

export default Login
