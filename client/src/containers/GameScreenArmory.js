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
          <div>
            { this.props.swords.map((sword, idx) => {
              return (
                <div key={'armorySword-' + idx} className={'m-armoryCard'}>
                  <div>Name: {sword.name}</div>
                  <div>Power: {sword.power}</div>
                  <div>Durability: {sword.durability}</div>
                  <div>Element: {sword.element}</div>
                  <div>Feats: { sword.feats.length === 0 ? 'None' : sword.feats[0]}</div>
                  <div className={'a-armoryCardStatus'}>Status:<br />
                    { sword.quest === true ? 'On a quest' : 'In armory' }
                  </div>
                </div>
              )
            })}
          </div>
        }
      </div>
    )
  }
}

export default gameScreenArmory;
