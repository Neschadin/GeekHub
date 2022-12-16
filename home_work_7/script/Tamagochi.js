class Tamagochi {
  constructor() {
    this.health = 100;
    this.saturation = 100;
    this.strength = 100;
    this.happiness = 100;

    const checkParams = setInterval(() => {
      this.health -= 5;
      if (!this.health) clearInterval(checkParams);
      if (!this.saturation) this.health -= 5;
      if (!this.strength) this.health -= 5;
      // console.log(this.health);
    }, 500);
  }


  feed() {
    this.saturation += 50;
  };
  play() {
    this.happiness += 10;
    this.saturation -= 10;
    this.strength -= 10;
  };
  walk() {
    this.strength -= 5;
    this.saturation -= 5;
  };
  sleep() {
    this.health += 10;
    this.saturation -= 5;
  };
  treat() {
    this.health = 100;
  };
}