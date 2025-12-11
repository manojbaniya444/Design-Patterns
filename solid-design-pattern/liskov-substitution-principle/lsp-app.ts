// Base bird class which apply to almost all of the bird

class BaseBird {
  makeSound() {}
}

// Class Bird which apply to those which fly
class FlyingBird extends BaseBird {
  makeFly() {}
}

class SparrowFly extends FlyingBird {
  makeFly(): void {
    console.log("Sparrow fly")
  }

  makeSound(): void {
    console.log("Sparrow Sound")
  }
}

class PenguinSound extends BaseBird {
  makeSound(): void {
    console.log("Penguin Sound")
  }
}

// make fly
const makeFlyableBirdFly = (flyBird: FlyingBird) => {
  flyBird.makeFly()
}

// make bird sound
const makeBirdSound = (bird: BaseBird) => {
  bird.makeSound()
}

makeFlyableBirdFly(new SparrowFly())
makeBirdSound(new SparrowFly())
makeBirdSound(new PenguinSound())
// makeFlyableBirdFly(new PenguinSound()) // compile time error (not acceptable for the penguin to the flyingbird class accpet in that)