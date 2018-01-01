import React from 'react';
import materialMap from '../lib/nameMapping.js'
import { connect } from 'react-redux';
import { forgeSword } from '../actions';
import { bindActionCreators } from 'redux';

class gameScreenRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.verifyMaterials = this.verifyMaterials.bind(this)
  }
  verifyMaterials(recipeKeys, recipeReqs, materials) {
    let checkMap = {}
    let checks = []
    for (let i = 0; i < recipeKeys.length; i++) {
      let recipeReq = recipeReqs[recipeKeys[i]]
      let currentMaterial = materials[recipeKeys[i]]
      let check = recipeReq - currentMaterial.count
      checkMap[recipeKeys[i]] = check
      if (check <= 0) {
        checks.push(true)
      } else {
        checks.push(false)
      }
    }
    checkMap.result = checks.reduce((a,b) => a && b);
    console.log('CHECK MAP', checkMap)
    return checkMap;
  }
  render() {
    let recipeKeys = Object.keys(this.props.recipes)
    return (
      <div className={'m-gameScreenRecipes'}>
        { recipeKeys.map( (key, i) => {
            let recipe = this.props.recipes[key]
            let reqs = Object.keys(recipe.requires)

            // check current materials
            let checkMap = this.verifyMaterials(reqs, recipe.requires, this.props.materials)
            console.log('MATERIALS', checkMap)

            return (
              <div className={'m-recipeCard'} key={'recipe-' + i}>
                <div><strong>{recipe.name}</strong></div>
                <div><i>{recipe.descrip}</i></div>
                <div className={'a-recipeReqs'}>
                  <div><strong>Requires:</strong></div>
                  { reqs.map((key, i) => {
                    return (
                      <div className={'a-recipeMaterial'} key={'recipeMaterial-' + i}>
                        <div>{ materialMap[key]} x {recipe.requires[key] }</div>
                        <div style={{color: 'red'}}>{ checkMap[key] > 0 ? 'You need: ' + checkMap[key] : null }</div>
                      </div>
                    )
                  })}
                </div>
                  { checkMap !== undefined && checkMap.result === true ?
                    <button onClick={() => { this.props.dispatch(forgeSword(recipe, reqs))} } className={'a-recipeForgeButton'}>Forge Sword</button>
                    : null
                  }
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(forgeSword, dispatch) }
}

export default connect(mapDispatchToProps)(gameScreenRecipes);
