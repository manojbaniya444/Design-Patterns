interface Prototype {
  clone(): Prototype
}

class Address {
  constructor(
    public street: string,
    public city: string,
    public country: string
  ){}
}

class Person implements Prototype {
  public name: string;
  public age: number;
  public address: Address;
  public hobbies: string[];

  constructor(name: string, age: number, address: Address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.hobbies = [];
  }

  public shallowClone(): Person {
    const cloned = new Person(this.name, this.age, this.address);
    cloned.hobbies = this.hobbies; // reference
    return cloned; 
  }

  public clone(): Person {
    const cloned = new Person(
      this.name,
      this.age,
      new Address(this.address.street, this.address.city, this.address.country)
    );
    cloned.hobbies = [];
    return cloned;
  }
}

const person1 = new Person("Jonathan", 60, new Address("123st", "NYC", "USA"))
person1.hobbies.push("Reading", "Gambling")

const shallowClonePerson = person1.shallowClone();
shallowClonePerson.address.city = "Tx" // this affect the person 1 too, reference

const deepClonePerson = person1.clone()
deepClonePerson.address.city = "Oh" // do not affect the person1