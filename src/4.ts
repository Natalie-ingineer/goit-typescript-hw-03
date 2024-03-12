class Key {
  constructor(private signature: number) {}

  public getSignature(signature: number) {
    return signature;
  }
}

class Person {
  constructor(private key: Key) {}
 
  getKey(key: Key) {
    return key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(public door: boolean, key: Key) {}

  public comeIn(person: Person) {
    // const person = new Person(key);
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

 public abstract openDoor(key: Key) {}
}

class MyHouse extends House() {
  constructor() {
    super();
  }
  openDoor(person.getKey()) {
    if (key === key) {
      this.door === true;
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
