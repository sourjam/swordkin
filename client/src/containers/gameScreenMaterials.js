import React from 'react';
import nameMap from '../lib/nameMapping'

class gameScreenMaterials extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let matKeys = Object.keys(this.props.materials)
    console.log('matkeys', matKeys, this.props.materials)
    return (
      <div className={'o-gameScreenMaterials'}>
        { matKeys.map((key, idx) => {
          if (key !== 'ore') {
            return (
              <div className={'m-materialsRow'} key={'material-' + idx}>{nameMap[key]}: {this.props.materials[key].count}

              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default gameScreenMaterials;
