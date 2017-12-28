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
        <p><button onClick={this.dispatchAction}>swordkin</button></p>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(startGame, dispatch)}
}

export default connect(mapDispatchToProps)(startScreen)
