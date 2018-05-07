import { Thumbnail } from './thumbnail';
import { ResourceList } from './resourceList';
import { Url } from './url';

export class Creator {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  resourceURI: string;
  thumbnail: Thumbnail;
  comics: ResourceList;
  series: ResourceList;
  stories: ResourceList;
  events: ResourceList;
  urls: Array<Url>;

  constructor() {
    this.thumbnail = new Thumbnail();
    this.comics = new ResourceList();
    this.series = new ResourceList();
    this.stories = new ResourceList();
    this.events = new ResourceList();
    this.urls = new Array<Url>();
  }
}
