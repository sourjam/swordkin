import clone from 'lodash/fp/clone';

class Letter {
  constructor(from, subject, content, recipes = [], materials = [], quest = {}) {
    this.unread = true
    this.from = from
    this.subject = subject
    this.content = content
    this.recipes = recipes
    this.materials = materials
    this.quest = quest
    let quest001 = {
      id: q001,
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
    this.createdMail = {

    }
  }
  generateMail(state) {
    let mail
    // initial post ammit sword quests/mails
    if (state.swords && state.swords[0] && state.swords[0].id === 'swordAmmit' && !state.swords[0].questFlag) {
      console.log('load ammit mails')
      state.swords[0].questFlag = true;
      let villageBoyMail = new Letter('Dao', 'Please sir', 'I want fame.')
      let envoyMail = new Letter('Royal Envoy', 'An offer', 'The sword')
      mail = [villageBoyMail, envoyMail]
    } else {

    }

    return mail
  }
}
