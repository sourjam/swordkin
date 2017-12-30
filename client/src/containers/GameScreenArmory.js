import React from 'react';

class gameScreenArmory extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={'m-gameScreenArmory'}>
        { this.props.swords.length === 0 ?
          <div className={'a-armoryEmptyMsg'}>No swords here...<br />Why not try making one?</div>
          :
          <div>some swords here</div>
        }
      </div>
    )
  }
}

export default gameScreenArmory;
