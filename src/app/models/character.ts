import { Thumbnail } from './thumbnail';
import { Url } from './url';
import { ResourceList } from './resourceList';

export class Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  type: string;
  resourceURI: string;
  thumbnail: Thumbnail;
  urls: Array<Url>;
  comics: ResourceList;
  series: ResourceList;
  stories: ResourceList;
  events: ResourceList;

  constructor() {
    this.thumbnail = new Thumbnail();
    this.urls = new Array<Url>();
    this.comics = new ResourceList();
    this.series = new ResourceList();
    this.stories = new ResourceList();
    this.events = new ResourceList();
  }
}
