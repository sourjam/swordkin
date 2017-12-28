import React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions';
import { bindActionCreators } from 'redux';

class startScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.startScreen = true
    this.dispatchAction = this.dispatchAction.bind(this)
    console.log('start screen loaded')
  }

  dispatchAction() {
    this.props.dispatch(startGame(true))
    console.log('dispatch from startscreen')
  }

  render() {
    return (
      <div className={'o-startscreen'}>
        <p>Welcome to Swordkin</p>
        <p>You are a swordsmith living in a small village.<br />Your father was a swordsmith, and his father, and so on, and so on.</p>
        <p>Local villagers bring you precious ore every second.<br />Traveling warriors seek your weapons to fight monsters for fame and feats.<br />Kingdoms will entice you to craft within their realms.</p>
        <p>To start your trade, your father has bequeathed to you his favorite sword.<br />Take care of it.</p>
        <p><button onClick={this.dispatchAction}>Start</button></p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(startGame, dispatch)}
}

export default connect(mapDispatchToProps)(startScreen)
