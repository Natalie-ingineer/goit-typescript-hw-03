class Key {
  constructor(private signature: number) {}

  public getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(public door: boolean, protected key: Key) {}

  public comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key, door: boolean) {
    super(door, key);
    this.openDoor(key);
  }
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key, false);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
