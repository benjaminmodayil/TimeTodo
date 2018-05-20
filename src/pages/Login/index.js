import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
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
            className="login-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto my-32"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}

            <div className="mb-8">
              <label
                htmlFor="username"
                className="block text-grey-darker text-sm font-bold mb-2"
              >
                Username
              </label>
              <Field
                component={Input}
                type="text"
                name="username"
                id="username"
                validate={[required, nonEmpty]}
                classes="w-full mt-2 border rounded border-black"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="password"
                className="block text-grey-darker text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                component={Input}
                classes="w-full mt-2 border rounded border-black"
                type="password"
                name="password"
                id="password"
                validate={[required, nonEmpty]}
              />
            </div>
            <div className="flex flex-col">
              <button
                disabled={this.props.pristine || this.props.submitting}
                className="bg-red text-white font-bold py-2 px-4 rounded mb-4 hover-bg-red-dark"
                type="submit"
              >
                Log in
              </button>

              <Link
                to="/signup"
                className="inline-block text-center align-baseline font-bold text-sm text-blue hover-text-blue-darker"
                title="Sign-up for TaskTodo"
              >
                Register
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

Login = connect(mapStateToProps)(Login)

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login)
