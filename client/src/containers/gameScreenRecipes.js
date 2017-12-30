import React from 'react';
import materialMap from '../lib/nameMapping.js'

class gameScreenRecipes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let recipeKeys = Object.keys(this.props.recipes)
    return (
      <div className={'m-gameScreenRecipes'}>
        { recipeKeys.map( (key, i) => {
            let recipe = this.props.recipes[key]
            let reqs = Object.keys(recipe.requires)
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
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default gameScreenRecipes;
