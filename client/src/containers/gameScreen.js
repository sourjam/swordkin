import React from 'react';
import { connect } from 'react-redux';
import { incrementOre } from '../actions';
import { bindActionCreators } from 'redux';

class gameScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.gameScreen = true
    this.state.init = false
    this.state.intervalRef
    // this.dispatchAction = this.dispatchAction.bind(this)
    console.log('game screen loaded')
  }

  componentDidMount() {
    if (!this.state.init) {
      // send first quest and give first recipe
    }
    this.state.intervalRef = setInterval(()=>{
      this.props.dispatch(incrementOre())
    }, 1000)
  }

  render() {
    return (
      <div className={'o-gamescreen'}>
        <div className={'a-oreCounter'}>Ore: {this.props.ore}</div>
        <div className={'m-actionMenu'}>
          { this.props.recipes && this.props.recipes.length > 0 ?
            <button>Recipes: {this.props.recipes.length}</button>
          : null }

          { this.props.mail && this.props.mail.length > 0 ? <button>Mail: {this.props.mail.length}</button> : null }

          { this.props.ore > 10 ? <button>Craft Sword</button> : null }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(incrementOre, dispatch)}
}

export default connect(mapDispatchToProps)(gameScreen)
