import React from 'react';

class gameScreenArmory extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={'.o-gameScreenArmory'}>
        <button className={'m-gameScreenArmory'}>
          Armory: {this.props.swordCount}
        </button>
      </div>
    )
  }
}

export default gameScreenArmory;
