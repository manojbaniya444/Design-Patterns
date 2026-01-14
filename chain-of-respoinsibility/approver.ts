interface Approver {
  setNext(approver: Approver): Approver;
  approve(amount: number): void;
}

// base class
abstract class BaseApprover implements Approver {
  protected nextApprover?: Approver;

  setNext(approver: Approver): Approver {
    this.nextApprover = approver
    return approver
  }

  approve(amount: number): void {
    if (this.nextApprover) {
      this.nextApprover.approve(amount)
    }
  }
}

// manager approver < $1000
class Manager extends BaseApprover {
  approve(amount: number): void {
    if (amount <= 1000) {
      console.log(`Manager approved ${amount}`)
    } else {
      // this.nextAprrover.approve(amount)
      console.log(`Manager do not approve ${amount} so setnext`)
      super.approve(amount)
    }
  }
}

// Director approver < $10000
class Director extends BaseApprover {
  approve(amount: number): void {
    if (amount <= 10000) {
      console.log(`Director has approved ${amount}`)
    } else {
      console.log(`Director do not approve ${amount} so setnext`)
      super.approve(amount)
    }
  }
}

// CEO approve other
class CEO extends BaseApprover {
  approve(amount: number): void {
    console.log(`CEO ${amount}`)
  }
}

// building the chain
const manager = new Manager()
const director = new Director()
const ceo = new CEO()

manager.setNext(director).setNext(ceo);

manager.approve(100); // manager approve 100
manager.approve(7700); // director approve 7700
manager.approve(77000); // ceo approve 77000