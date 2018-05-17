import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, focus, reduxForm } from 'redux-form'
import { login } from '../../actions/auth'
import { registerUser } from '../../actions/users'
import BasicNav from '../../components/BasicNav/index.js'
import Input from '../../components/input'
import { isTrimmed, length, matches, nonEmpty, required } from '../../validators'

const passwordLength = length({ min: 10, max: 72 })
const matchesPassword = matches('password')

export class Signup extends Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values
    const user = { username, password, firstName, lastName }
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />
    }

    return (
      <React.Fragment>
        <BasicNav />
        <main className="container mx-auto">
          <h1 className="screenreader-only">Signup page</h1>

          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="firstName">First name</label>
            <Field component={Input} type="text" name="firstName" />
            <label htmlFor="lastName">Last name</label>
            <Field component={Input} type="text" name="lastName" />
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
            />
            <label htmlFor="passwordConfirm">Confirm password</label>
            <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
            />
            <button type="submit" disabled={this.props.pristine || this.props.submitting}>
              Register
            </button>
          </form>
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

Signup = connect(mapStateToProps)(Signup)

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(Signup)
