import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import reducer from './reducers'
// import css from './client.css'

// const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>hello swordkin</div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('swordkinApp')
)
