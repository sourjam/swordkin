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
        // newState.swordkinReducer.recipes.push("papa's sword")
        newState.swordkinReducer.mail = []
        let initRecipe = {
          name: 'The Unbreakable',
          descrip: "Papa's greatest work.",
          requires: [{ore: 10}]
        }
        let initMail = {
          unread: true,
          subject: 'The Unbreakable',
          content: 'Dear child, go forth and make your mark on the world. Please use this recipe for my greatest creation, The Unbreakable sword. It may not be the strongest but it will endure eternity.',
          items: [initRecipe],
          quests: []
        }
        newState.swordkinReducer.mail.push(initMail)
      }
      this.setState(newState.swordkinReducer)
    })
  }
  render() {
    let unreadMail = 0
    if (this.state.mail) {
      unreadMail = this.state.mail.filter(letter => letter.unread === true)
    }
    return (
      <div className={'o-swordkin'}>
        { !this.state.start ?
          <StartScreen />
          :
          <GameScreen mail={this.state.mail} unreadMail={unreadMail.length} recipes={this.state.recipes} ore={this.state.ore} />
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
