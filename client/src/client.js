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
      if (!newState.swordkinReducer.init) {
        // give new player first letter and first recipe
        newState.swordkinReducer.init = true
        newState.swordkinReducer.recipes = []
        newState.swordkinReducer.recipes.push("papa's sword")
        newState.swordkinReducer.mail = []
        newState.swordkinReducer.mail.push("papa's letter")
      }
      this.setState(newState.swordkinReducer)
    })
  }
  render() {
    return (
      <div className={'o-swordkin'}>
        { !this.state.start ?
          <StartScreen />
          :
          <GameScreen mail={this.state.mail} recipes={this.state.recipes} ore={this.state.ore} />
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
