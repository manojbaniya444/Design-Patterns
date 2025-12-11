interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

interface Rechargable {
  recharge(): void;
}

class HumanWorkerISP implements Workable, Eatable, Sleepable {
  work() {
    console.log("Human worker work")
  }

  eat() {
    console.log("Human worker eat")
  }

  sleep() {
    console.log("Human worker sleep")
  }
}

class RobotWorkerISP implements Workable, Rechargable {
  work() {
    console.log("Robot worker work")
  }

  recharge() {
    console.log("Robot worker recharge")
  }
}

const assignWorkToWorker = (worker: Workable) => {
  worker.work()
}

const giveLaunchToWorker = (worker: Eatable) => {
  worker.eat()
}

assignWorkToWorker(new HumanWorkerISP())
assignWorkToWorker(new RobotWorkerISP())

giveLaunchToWorker(new HumanWorkerISP())
// giveLaunchToWorker(new RobotWorkerISP()) // Compiel time Error becuase the robot worker do not eat