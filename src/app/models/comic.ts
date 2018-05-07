import { TextObjects } from './textObjects';
import { Summary } from './summary';
import { Url } from './url';
import { ComicDate } from './comicDate';
import { ComicPrice } from './comicPrice';
import { Thumbnail } from './thumbnail';
import { Image } from './image';
import { ResourceList } from './resourceList';

export class Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  resourceURI: string;

  textObjects: Array<TextObjects>;
  urls: Array<Url>;
  series: Summary;
  variants: Array<Summary>;
  collections: Array<Summary>;
  collectedIssues: Array<Summary>;
  dates: Array<ComicDate>;
  prices: Array<ComicPrice>;
  thumbnail: Thumbnail;
  images: Array<Image>;
  creators: ResourceList;
  characters: ResourceList;
  stories: ResourceList;
  events: ResourceList;

  constructor() {
    this.textObjects = new Array<TextObjects>();
    this.urls = new Array<Url>();
    this.series = new Summary();
    this.variants = new Array<Summary>();
    this.collections = new Array<Summary>();
    this.collectedIssues = new Array<Summary>();
    this.dates = new Array<ComicDate>();
    this.prices = new Array<ComicPrice>();
    this.thumbnail = new Thumbnail();
    this.images = new Array<Image>();
    this.creators = new ResourceList();
    this.characters = new ResourceList();
    this.stories = new ResourceList();
    this.events = new ResourceList();
  }
}

