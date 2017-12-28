import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import css from './client.css'

import StartScreen from './containers/startScreen'
import GameScreen from './containers/gameScreen'

const store = createStore(reducer)

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    store.subscribe(() => {
      let newState = store.getState();
      this.setState(newState.swordkinReducer)
    })
  }
  render() {
    return (
      <div className={'o-swordkin'}>
        { !this.state.start ?
          <StartScreen />
          :
          <GameScreen ore={this.state.ore} />
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
