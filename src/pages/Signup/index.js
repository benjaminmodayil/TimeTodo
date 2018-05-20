import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
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
            className="register-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto my-32"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <div className="mb-8">
              <div className="mb-4">
                <label htmlFor="firstName">First name</label>
                <Field
                  component={Input}
                  type="text"
                  name="firstName"
                  classes="w-full mt-2 border rounded border-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName">Last name</label>
                <Field
                  component={Input}
                  type="text"
                  name="lastName"
                  classes="w-full mt-2 border rounded border-black"
                />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="username">Username</label>
              <Field
                component={Input}
                type="text"
                name="username"
                validate={[required, nonEmpty, isTrimmed]}
                classes="w-full mt-2 border rounded border-black"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="password">Password</label>
              <Field
                component={Input}
                type="password"
                name="password"
                validate={[required, passwordLength, isTrimmed]}
                classes="w-full mt-2 border rounded border-black"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="passwordConfirm">Confirm password</label>
              <Field
                component={Input}
                type="password"
                name="passwordConfirm"
                validate={[required, nonEmpty, matchesPassword]}
                classes="w-full mt-2 border rounded border-black"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <button
                type="submit"
                className="bg-red text-white font-bold py-2 px-4 rounded mb-4 hover-bg-red-dark"
                disabled={this.props.pristine || this.props.submitting}
              >
                Register
              </button>

              <Link
                to="/login"
                className="inline-block text-center align-baseline font-bold text-sm text-blue hover-text-blue-darker"
                title="Login to TaskTodo"
              >
                Login
              </Link>
            </div>
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
