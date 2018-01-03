let adjectives = [
  '',
  'Aging', 'Aged', 'Airy',
  'Barren', 'Big', 'Burly', 'Blackened', 'Boyish',
  'Cautious', 'Cute', 'Curly', 'Crestfallen', 'Cringey',
  'Darkened', 'Dainty', 'Dangerous', 'Daft', 'Droopy', 'Dripping', 'Dirty',
  'Excellent', 'Elephantine', 'Elegant', 'Evil',
  'Fickle', 'Faintly', 'Fallen', 'Ferocious', 'Fat',
  'Ghastly', 'Ghoulish', 'Ghostly', 'Grim', 'Gregarious',
  'Hollowed', 'Hallow', 'Holy', 'Hardened', 'Heavenly',
  'Indistinguishable', 'Incredible', 'Invincible',
  'Jagged', 'Joyous', 'Jealous', 'Joking',
  'Kissed', 'Kept',
  'Loved', 'Laughing', 'Leaping', 'Limping', 'Loquacious',
  'Massive', 'Muddy', 'Mixed', 'Malicious', 'Malignant', 'Mortified',
  'Nihilistic', 'Negative',
  'Orphaned', 'Ogreish',
  'Pooey', 'Pintsized', 'Peckish', 'Pale', 'Pulled',
  'Quiet', 'Quaint',
  'Ruddy', 'Roaring', 'Runny',
  'Stinky', 'Soiled', 'Spoiled', 'Sullen', 'Sour', 'Stained',
  'Trained', 'Tricky', 'Tall', 'Tallish', 'Taloned', 'Trollish',
  'Ugly', 'Unkempt',
  'Vivacious', 'Villainous',
  'Watery', 'Wet', 'Willful', 'Weak', 'Weakened', 'Warring',
  'Xenophobic',
  'Yellowed',
  'Zealous'
]

let personNouns = [
  'Boy', 'Girl', 'Man', 'Woman', 'Warrior', 'Knight', 'Envoy', 'Villager', 'Cretin', 'Loon', 'Farmer', 'Royal', 'Prince', 'Lord', 'Lady', 'Princess', 'Blacksmith', 'Miner', 'Traveler', 'Stranger', 'Child', 'Beggar', 'Count', 'Countess', 'Thief', 'Charlatan', 'Heretic', 'Holyman', 'Priest', 'Nun', 'Rogue', 'Acolyte'
]

let origins = [
  'of', 'from', 'by', 'near'
]

let otherNouns = [
  'Well', 'Church', 'Farm', 'House', 'Manor', 'Castle', 'Moat', 'Village', 'Hovel', 'Road', 'Cul-de-sac', 'Mountain', 'Vineyard', 'Forest', 'Woods', 'Monastery', 'Field', 'Fortress', 'Barracks', 'Cave', 'Hut'
]

class personGenerator {
  constructor() {

  }
  randomIndex(length) {
    return Math.floor(Math.random() * (length - 0) + 0);
  }
  create() {
    let adjOne = adjectives[this.randomIndex(adjectives.length)]
    let person = personNouns[this.randomIndex(personNouns.length)]
    let origin = origins[this.randomIndex(origins.length)]
    let adjTwo = adjectives[this.randomIndex(adjectives.length)]
    let placeThing = otherNouns[this.randomIndex(otherNouns.length)]
    return (adjOne + ' ' + person + ' ' + origin + ' the ' + adjTwo.toLowerCase() + ' ' + placeThing).replace('  ', ' ').trim()
  }
}

export default personGenerator
