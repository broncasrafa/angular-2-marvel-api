import { Thumbnail } from './thumbnail';
import { ResourceList } from './resourceList';
import { Summary } from './summary';

export class Stories {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: string;
  thumbnail: Thumbnail;
  creators: ResourceList;
  characters: ResourceList;
  series: ResourceList;
  comics: ResourceList;
  events: ResourceList;
  originalIssue: Summary;

  constructor() {
    this.thumbnail = new Thumbnail();
    this.comics = new ResourceList();
    this.series = new ResourceList();
    this.creators = new ResourceList();
    this.characters = new ResourceList();
    this.events = new ResourceList();
    this.originalIssue = new Summary();
  }
}
