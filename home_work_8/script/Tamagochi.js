// Create an object with properties: name, health, saturation(ситість), strength, happiness.The object should be created as the instance of a class.
// In the prototype of the object there should be methods
// for interaction with the character.(Feed, Play, Walk, Sleep, Treat, < and more, think of something: ) > )
// Every 3 seconds the character will have to decrease his parameters.Correspondingly, calling methods can increase these rates.
// For example: tamagochi.play() - increases happiness by + 5, and reduces the force by - 10 units and the saturation by - 5 units...Think of your own rules
// for the character.
// Information about the status of the character is taken directly to the page, after each state update,
// you can display emoticons that will characterize the character mood.
// In the case of a character's death, predict a sad message and stop other changes.
// After death all methods should become blocked, they can't be used any more.
// Advanced(optional) task - Create an army of tamagochi. Possible interface: "Create Tamagochi"
// Button For each animal, "feed the tamagochi", "play", "sleep,"
// etc.
// Summation - what we expect to see in the result:
//     The webpage where your tamagochi lives and user can interact with him.
// The initial set of parameters and actions with characters is described above, but you can add more
// if you want, use your imagination

class Tamagochi {
  constructor(
    tamagochiName,
    tamagochiHealth,
    tamagochiSaturation,
    tamagochiStrength,
    tamagochiHappiness
  ) {
    this.tamagochiName = tamagochiName;
    this.tamagochiHealth = tamagochiHealth;
    this.tamagochiSaturation = tamagochiSaturation;
    this.tamagochiStrength = tamagochiStrength;
    this.tamagochiHappiness = tamagochiHappiness;
  }

  Feed() {}
  Play() {}
  Walk() {}
  Sleep() {}
  Treat() {}
}
