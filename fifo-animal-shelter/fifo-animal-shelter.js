'use strict';

class animalShelter {
  constructor(Cat, Dog) {
  class Cat {
    constructor(type, timestamp) {
      this.type,
      this.timestamp,
    }
  }

  class Dog {
    constructor(type, timestamp) {
      this.type,
      this.timestamp,
    }
  }
  }
};

enqueue(animal) {
  const animalShelter = new animalShelter(animal);
    if (!this.head) {
      this.head = animalShelter;
      return this;
    }
    animalShelter.next = this.head;
    this.head = animalShelter;
    return this;
  };

dequeue(pref) {
    let current = this.head;
    if (!this.head) {
      return null;
    }
    if (!animalShelter.next) {
      animalShelter = null;
      return animalShelter;
    }
    while (animalShelter.next) {
      if (!animalShelter.next.next) {
        animalShelter.next = null;
        return null;
      }
      animalShelter = animalShelter.next;
    }
    return null;
  }
};

peek() {
  return this.animalShelter[0];
};
