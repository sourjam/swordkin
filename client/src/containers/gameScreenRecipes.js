import React from 'react';

class gameScreenRecipes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let recipeKeys = Object.keys(this.props.recipes)
    return (
      <div className={'m-gameScreenRecipes'}>
        { recipeKeys.map( key => {
            let recipe = this.props.recipes[key]
            return (
              <div>{recipe.name}</div>
            )
          })
        }
      </div>
    )
  }
}

export default gameScreenRecipes;
