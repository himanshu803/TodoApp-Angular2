import { Component, OnInit } from '@angular/core';
import {CollectableService} from "../shared/collectable.service";
import {Collectable} from "../shared/collectable.module";

@Component({
  selector: 'app-market',
  templateUrl: 'market.component.html'
})
export class MarketComponent implements OnInit {
  collectables: Collectable[] = [];

  onAddToCollection (item: Collectable) {
    this.collectableService.addToCollection(item);
  }

  AddCollection(description, type) {
    if (description == []) {
      alert('Description is empty!');
      return;
    }
    else if (type == []){
      alert('Type is empty!');
      return;
    }
    else {
      this.collectables.push({description, type});
    }
  }
  constructor(private collectableService: CollectableService) {}

  ngOnInit() {
    this.collectables = this.collectableService.getCollectable();
  }

}




