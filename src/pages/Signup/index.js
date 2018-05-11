import React, { Component } from 'react'
import BasicNav from '../../components/BasicNav/index.js'
import EntryForm from '../../components/EntryForm/index.js'

export default class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <BasicNav />
        <main className="container mx-auto">
          <h1 className="screenreader-only">Signup page</h1>
          <EntryForm type={'register'} />
        </main>
      </React.Fragment>
    )
  }
}
