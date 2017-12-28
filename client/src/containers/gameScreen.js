import React from 'react';
import { connect } from 'react-redux';
import { incrementOre } from '../actions';
import { bindActionCreators } from 'redux';

class gameScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.gameScreen = true
    this.dispatchAction = this.dispatchAction.bind(this)
    console.log('game screen loaded')
  }

  componentDidMount() {
    setInterval(()=>{
      this.props.dispatch(incrementOre())
    }, 1000)
  }

  dispatchAction() {
    this.props.dispatch(incrementOre())
    console.log('dispatch from startscreen')
  }

  render() {
    return (
      <div className={'o-gamescreen'}>
        <div className={'a-oreCounter'}>Ore: {this.props.ore}</div>
        game screen
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(incrementOre, dispatch)}
}

export default connect(mapDispatchToProps)(gameScreen)
