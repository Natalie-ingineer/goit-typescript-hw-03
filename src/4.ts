class Key {
    constructor(private signature: number)
  
    getSignature(signature: number) {
        return signature =Math.random().
    }
}

class Person {
    constructor(public name: string, public age: number, Key: number) {
        
        privat this.Key=key
    }
  greet(phrase: string): void {
    console.log(phrase + ", мене звати " + this.name);
  }
  getKey(key: number) {
    return key;
  }
}

abstract class House {
    constructor(public door: boolean, Key:number)
  private tenants: Person[] = [];

  comeIn(name: string) {
      const person = new Person(key);
      if (this.door===true)
    this.tenants.push(person);
    }
    abstract OpenDoor(Key:number){}
}

class MyHouse extends House() {
    openDoor() {
        if (key === key)
            this.openDoor === true;
    }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
