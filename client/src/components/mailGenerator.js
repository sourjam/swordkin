import clone from 'lodash/fp/clone';
import PersonGenerator from '../lib/personGenerator';

let personGenerator = new PersonGenerator();

class LetterContent {
  // there are several types of requests...
  // revenge, assassination, fame, treasure, brutality, mercy, power, pleasure?
  // randomize request content
}

class RecipeGenerator {

}

class MaterialGenerator {
  // these might not be random
}

class Letter {
  constructor(townLevel, content, recipes = [], materials = [], quest = {}) {
    this.unread = true
    this.from = personGenerator.create()
    this.content = content
    this.recipes = recipes
    this.materials = materials
    this.quest = quest
    let quest001 = {
      id: 'q001',
      name: 'Go Here Now',
      descrip: 'This is thing',
      validIf: { swordAmmit: 1 },
      materialReward: [],
      recipeReward: [],
      questReward: [],
      questLevel: 0,
      accepted: false,
    }
  }
}

export default class mailGenerator {
  constructor() {
    console.log('hello generator')
  }
  generateMail(state) {
    let mail
    // initial post ammit sword quests/mails
    if (state.swords && state.swords[0] && state.swords[0].id === 'swordAmmit' && !state.swords[0].questFlag) {
      console.log('load ammit mails')
      state.swords[0].questFlag = true;
      let villageBoyMail = new Letter(0, 'I want fame.')
      let envoyMail = new Letter(0, 'The sword')
      mail = [villageBoyMail, envoyMail]
    } else {

    }

    return mail
  }
}
