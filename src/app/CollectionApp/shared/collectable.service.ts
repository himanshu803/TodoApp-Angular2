import {Collectable} from "./collectable.module";

export class CollectableService {
  private collectables: Collectable[] = [
    {description: 'Collection of jQuery tricks', type: 'Book'},
    {description: 'The first latter over written', type: 'Piece of paper'},
    {description: 'A photograph of someone', type: 'Photo'},
    {description: 'A box with all sold zone', type: 'Garbage'}
  ];

  private collection: Collectable[] = [];

  getCollectable(){
    return this.collectables;
  }

  getCollection(){
    return this.collection;
  }

  addToCollection(item: Collectable){
    if (this.collection.indexOf(item) !== -1) {
      alert('Already added!')
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item: Collectable){
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
