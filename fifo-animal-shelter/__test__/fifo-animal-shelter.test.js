'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('fifo-animal-shelter.js', () => {
  test('#animalShelter', () => {
    const animalShelter = new AnimalShelter('You created a new image!');
    expect(animalShelter.value).toEqual('You created a new image!');
    expect(animalShelter.next).toEqual(null);
  });
});
