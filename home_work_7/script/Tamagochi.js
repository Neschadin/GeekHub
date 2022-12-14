class Tamagochi {
  constructor(
    tamagochiName,
    tamagochiHealth = 100,
    tamagochiSaturation = 100,
    tamagochiStrength = 100,
    tamagochiHappiness = 100
  ) {
    this.tamagochiName = tamagochiName;
    this.tamagochiHealth = tamagochiHealth;
    this.tamagochiSaturation = tamagochiSaturation;
    this.tamagochiStrength = tamagochiStrength;
    this.tamagochiHappiness = tamagochiHappiness;
  }

  // Every 3 seconds the character will have to decrease his parameters.Correspondingly, calling methods can increase these rates.
  Feed() {}
  Play() {} // increases happiness by + 5, and reduces the force by - 10 units and the saturation by - 5 units...Think of your own rules
  Walk() {}
  Sleep() {}
  Treat() {}
  // you can display emoticons that will characterize the character mood.
  // In the case of a character's death, predict a sad message and stop other changes.
}