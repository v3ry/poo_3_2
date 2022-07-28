class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }
  getDistance(fighter1,fighter2){
    return(Math.sqrt(Math.pow(fighter2.x - fighter1.x,2)+Math.pow(fighter2.y - fighter1.y,2)).toFixed(2));
  }
  isTouchable(fighter1,fighter2){
    if (fighter1.getRange() >= this.getDistance(fighter1,fighter2)) return true
  }
}