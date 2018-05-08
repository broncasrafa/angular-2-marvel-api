import { Url } from './url';
import { Thumbnail } from './thumbnail';
import { ResourceList } from './resourceList';
import { Summary } from './summary';


export class Series {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Array<Url>;
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: Thumbnail;
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  comics: ResourceList;
  events: ResourceList;
  next: Summary;
  previous: Summary;

  constructor() {
    this.urls = new Array<Url>();
    this.thumbnail = new Thumbnail();
    this.creators = new ResourceList();
    this.characters = new ResourceList();
    this.stories = new ResourceList();
    this.comics = new ResourceList();
    this.events = new ResourceList();
    this.next = new Summary();
    this.previous = new Summary();
  }
}
