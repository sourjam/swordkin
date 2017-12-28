import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
// import css from './client.css'

import StartScreen from './containers/startScreen'

const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    // show start screen
    store.subscribe(() => {
      let newState = store.getState();
      this.setState(newState.swordkinReducer)
    })
  }
  render() {
    console.log('calling render')
    return (
      <div>
        { !this.state.start ?
          <StartScreen />
          :
          <div>game on</div>
        }
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('swordkinApp')
)
