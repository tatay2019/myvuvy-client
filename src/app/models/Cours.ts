import {User} from './User';
import {Resource} from './Resource';
import {Categories} from './Categories';

export class Cours {
  public id?: number;
  public name?: string;
  public description?: string;
  public duration?: string;
  public image?: string;
  public prix?: number;
  public publisher?: User;
  public resources?: [Resource];
  public category?: Categories;
}
