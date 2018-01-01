import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { addMail } from './actions'
import reducer from './reducers'
import css from './client.css'

import StartScreen from './containers/startScreen'
import GameScreen from './containers/gameScreen'

import MailGenerator from './components/mailGenerator'

const mailbox = new MailGenerator()
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
        newState.swordkinReducer.timer = 0
        newState.swordkinReducer.recipes = {}
        newState.swordkinReducer.materials = {ore: {count: 0}}
        newState.swordkinReducer.mail = []
        newState.swordkinReducer.swords = []
        let initRecipe = {
          type: 'recipe',
          id: 'swordAmmit',
          name: 'Sword of Ammit',
          descrip: "Papa's greatest work.",
          requires: {ore: 10, soulHilt: 1},
          power: 99,
          durability: 1,
          element: '???',
          quest: false,
          feats: [],
          timerOrigin: 0,
          questFlag: false
        }
        let initMaterial = {
          type: 'material',
          id: 'soulHilt',
          name: 'Soul Hilt',
          descrip: "A mysterious gift from Papa.",
          count: 1
        }
        let initMail = {
          unread: true,
          from: 'Papa',
          subject: 'Sword of Ammit',
          content: 'Dear child, go forth and make your mark on the world. I bequeath to you the materials to craft my greatest creation, the Sword of Ammit. It will absorb the strengths of those it kills. And should the weapon break, its fragments will hold onto that same strength. Reforge with other Ammit fragments to create an an even more powerful weapon. One day even the strongest weapon.',
          recipes: [initRecipe],
          materials: [initMaterial],
          quests: []
        }
        newState.swordkinReducer.mail.push(initMail)
      } else {
        let mail = mailbox.generateMail(newState.swordkinReducer)
        if (mail && mail.length > 0) {
          console.log('mail', mail)
          store.dispatch(addMail(mail))
        }
      }
      // TODO
      // check if a new letter should be sent
      this.setState(newState.swordkinReducer)
    })
  }
  render() {
    let unreadMail = 0
    if (this.state.mail) {
      unreadMail = this.state.mail.filter(letter => letter.unread === true)
    }
    this.state.start = true //debug flag
    return (
      <div className={'o-swordkin'}>
        { !this.state.start ?
          <StartScreen />
          :
          <GameScreen mail={this.state.mail} unreadMail={unreadMail.length} materials={this.state.materials} recipes={this.state.recipes} swords={this.state.swords}
          timer={this.state.timer}
          />
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
