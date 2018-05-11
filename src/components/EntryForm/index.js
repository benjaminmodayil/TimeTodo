import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

export default class EntryForm extends Component {
  render() {
    let registerTemplate =
      this.props.type === 'register' ? <RegisterForm /> : <LoginForm />

    return <React.Fragment>{registerTemplate}</React.Fragment>
  }
}
