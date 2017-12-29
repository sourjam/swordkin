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
        <p>You are a swordsmith starting a new trade in a small village.<br />Your father was a swordsmith, and his father, and so on, and such that.</p>
        <p>Local villagers bring you <strong>metal ore</strong> every second.<br /><strong>Visitors</strong> seek your weapons to fight monsters for feats and fame.<br />Kingdoms may entice you to <strong>forge</strong> for their realms.</p>
        <p>A <strong>letter</strong> awaits upon your arrival in your new home...</p>
        <p><button onClick={this.dispatchAction}>Start</button></p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(startGame, dispatch)}
}

export default connect(mapDispatchToProps)(startScreen)
