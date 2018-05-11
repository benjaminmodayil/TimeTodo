import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto my-32"
      action="/api/users/"
      method="POST"
      data-module="LoginForm"
    >
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          required="required"
        />
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="firstName"
          type="text"
          placeholder="first name"
          name="firstName"
          required="required"
        />
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="lastName"
          type="text"
          placeholder="last name"
          name="lastName"
          required="required"
        />
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          name="password"
          required="required"
        />
      </div>
      <div class="flex flex-col items-center justify-between">
        <button
          class="bg-blue text-white font-bold py-2 px-4 rounded mb-4 hover-bg-blue-dark"
          type="submit"
        >
          Register
        </button>
        <Link
          class="inline-block align-baseline font-bold text-sm text-blue hover-text-blue-darker"
          to="/login"
        >
          Login
        </Link>
      </div>
    </form>
  )
}
