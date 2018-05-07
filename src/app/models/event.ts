import { Url } from './url';
import { Thumbnail } from './thumbnail';
import { ResourceList } from './resourceList';
import { Next } from './next';
import { Previous } from './previous';

export class Event {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  modified: string;
  start: string;
  end: string;
  urls: Array<Url>;
  thumbnail: Thumbnail;
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  comics: ResourceList;
  series: ResourceList;
  next: Next;
  previous: Previous;

  constructor() {
    this.urls = new Array<Url>();
    this.thumbnail = new Thumbnail();
    this.creators = new ResourceList();
    this.characters = new ResourceList();
    this.stories = new ResourceList();
    this.comics = new ResourceList();
    this.series = new ResourceList();
    this.next = new Next();
    this.previous = new Previous();
  }
}
