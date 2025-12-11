class Bird {
  makeSound() {}
  makeFly() {}
}

class Sparrow extends Bird {
  makeSound() {
    console.log("Sparrow makes sound")
  }

  makeFly() {
    console.log("Sparrow in the fly")
  }
}

class Penguin extends Bird {
  makeSound() {
    console.log("Penguin makes a sound")
  }

  makeFly() {
    throw new Error("Not")
  }
}

const makeBirdFlyAndSound = (bird: Bird) => {
  bird.makeSound();
  bird.makeFly();
}

makeBirdFlyAndSound(new Sparrow())
makeBirdFlyAndSound(new Penguin()) // error because the base class method `makeFly` is not applicable in penguin

// If the base class is being inherited to any other class then the methods in the base class should be override or accessible by the subclass according to the LSP principle.
// If the base class method does not apply to the subclass then do not inherit that