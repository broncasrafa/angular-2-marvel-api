import { Item } from './item';

export class ResourceList {
  available: number;
  collectionURI: string;
  returned: number;
  items: Array<Item>;

  constructor() {
    this.items = new Array<Item>();
  }
}
