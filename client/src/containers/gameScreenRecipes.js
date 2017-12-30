import React from 'react';
import materialMap from '../lib/nameMapping.js'

class Recipe extends React.Component {

}

class gameScreenRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.verifyMaterials = this.verifyMaterials.bind(this)
  }
  verifyMaterials(recipeKeys, recipeReqs, materials) {
    let checkMap = {}
    for (let i = 0; i < recipeKeys.length; i++) {
      let recipeReq = recipeReqs[recipeKeys[i]]
      let currentMaterial = materials[recipeKeys[i]]
      console.log('materials', materials, recipeKeys[i])
      checkMap[recipeKeys[i]] = recipeReq - currentMaterial
    }
    console.log('CHECK MAP', checkMap)
  }
  render() {
    let recipeKeys = Object.keys(this.props.recipes)
    return (
      <div className={'m-gameScreenRecipes'}>
        { recipeKeys.map( (key, i) => {
            let recipe = this.props.recipes[key]
            let reqs = Object.keys(recipe.requires)

            // check current materials
            console.log('MATERIALS', this.props.materials)
            let checkMap = this.verifyMaterials(reqs, recipe.requires, this.props.materials)

            return (
              <div className={'m-recipeCard'} key={'recipe-' + i}>
                <div><strong>{recipe.name}</strong></div>
                <div><i>{recipe.descrip}</i></div>
                <div className={'a-recipeReqs'}>
                  <div>Requires:</div>
                  { reqs.map((key, i) => {
                    return <div key={'recipeMaterial-' + i}>{materialMap[key]} x {recipe.requires[key]}</div>
                  })}
                </div>
                <button className={'a-recipeForgeButton'}>Forge Sword</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default gameScreenRecipes;
