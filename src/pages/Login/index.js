import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, focus, reduxForm } from 'redux-form'
import { login } from '../../actions/auth'
import BasicNav from '../../components/BasicNav/index.js'
import Input from '../../components/input'
import { nonEmpty, required } from '../../validators'

export class Login extends Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />
    }

    let error
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }

    return (
      <React.Fragment>
        <BasicNav />
        <main className="container mx-auto">
          <h1 className="screenreader-only">Login page</h1>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
            />
            <button disabled={this.props.pristine || this.props.submitting}>
              Log in
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

Login = connect(mapStateToProps)(Login)

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login)
