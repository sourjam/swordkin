import React from 'react';
import { connect } from 'react-redux';
import { incrementOre } from '../actions';
import { bindActionCreators } from 'redux';

import GameScreenMail from './gameScreenMail';
import GameScreenArmory from './gameScreenArmory';
import GameScreenRecipes from './gameScreenRecipes';
// todo
// GameScreenRecipes
// GameScreenMaterials
// GameScreenCraft
// GameScreenArmory

class gameScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.gameScreen = true
    this.state.intervalRef
    this.state.currentModal = 0
    this.displayModal = this.displayModal.bind(this)
    console.log('game screen loaded')
  }

  componentDidMount() {
    this.state.intervalRef = setInterval(()=>{
      this.props.dispatch(incrementOre())
    }, 1000)
  }

  displayModal(id) {
    this.setState({currentModal: id})
  }

  render() {
    return (
      <div className={'o-gamescreen'}>
        <div className={'a-oreCounter'}>Ore: {this.props.ore}</div>
        <div className={'m-actionMenu'}>
          { Array.isArray(this.props.swords) ?
            <button className={ this.state.currentModal == 0 ? 'isActive' : null } onClick={()=>{this.displayModal(0)}}>
              Armory: {this.props.swords.length}
            </button> : null
          }
          { this.props.mail && this.props.mail.length > 0 ?
            <button className={ this.state.currentModal == 1 ? 'isActive' : null } onClick={()=>{this.displayModal(1)}}>
              Mail: {this.props.unreadMail == 0 ? <span>{this.props.unreadMail}</span> : <strong style={{color: 'red'}}>{this.props.unreadMail}</strong> }
            </button>
          : null }
          { this.props.recipes && Object.keys(this.props.recipes).length > 0 ?
            <button className={ this.state.currentModal == 2 ? 'isActive' : null } onClick={()=>{this.displayModal(2)}}>
              Recipes
            </button>
          : null }
          { this.props.materials && Object.keys(this.props.materials).length > 0 ? <button>Materials</button>
          : null}
          { this.props.ore >= 10 && Object.keys(this.props.recipes).length > 0 ? <button>Forge</button> : null }

        </div>
        <div className={'m-actionModals'}>
          { this.props.swords && this.state.currentModal == 0 ?
            <GameScreenArmory swords={this.props.swords} swordCount={this.props.swords.length} /> : null
          }
          { this.props.mail && this.state.currentModal == 1 ?
            <GameScreenMail unreadMail={this.props.unreadMail} mail={this.props.mail} /> : null
          }
          {
            this.props.recipes && this.state.currentModal == 2 ?
            <GameScreenRecipes recipes={this.props.recipes} /> : null
          }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(incrementOre, dispatch)}
}

export default connect(mapDispatchToProps)(gameScreen)
