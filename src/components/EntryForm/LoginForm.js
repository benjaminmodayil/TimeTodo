import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto my-32"
      action="/api/auth/login"
      method="POST"
      data-module="LoginForm"
    >
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          name="username"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          name="password"
        />
      </div>
      <div className="flex flex-col items-center justify-between">
        <button
          className="bg-blue text-white font-bold py-2 px-4 rounded mb-4 hover-bg-blue-dark"
          type="submit"
        >
          Sign In
        </button>

        <Link
          to="/signup"
          className="inline-block align-baseline font-bold text-sm text-blue hover-text-blue-darker"
          title="Sign-up for TaskTodo"
        >
          Register
        </Link>
      </div>
    </form>
  )
}
