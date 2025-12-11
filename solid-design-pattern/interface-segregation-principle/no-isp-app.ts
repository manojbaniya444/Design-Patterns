interface BaseWorker {
  work(): void;
  eat(): void;
  sleep(): void;
  recharge(): void;
}

class HumanWorker implements BaseWorker {
  work() {
    console.log("Human worker work");
  }

  eat() {
    console.log("Human worker eat");
  }

  sleep() {
    console.log("Human worker sleep");
  }

  // we are forced to implement this
  recharge() {
    throw new Error("Human worker do not recharge")
  }
}
class RobotWorker implements BaseWorker {
  work() {
    console.log("Robot worker work")
  }

  // we are forced to implement this
  eat() {
    throw new Error("Robots do not eat")
  }

  // we are forced to implement this
  sleep() {
    throw new Error("Robots do not sleep")
  }

  recharge() {
    console.log("Robts work and recharge")
  }
}
// throw the error because not all worker perform all the thing in the interface
const workerActivity = (w: BaseWorker) => {
  w.work();
  w.eat();
  w.sleep();
  w.recharge();
};

// Instead of creating a single interface for worker, segregate the interface and only implement that which it work in that