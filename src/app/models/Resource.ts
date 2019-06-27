import {Cours} from './Cours';

export class Resource {
  public id?: number;
  public title?: string;
  public description?: string;
  public url?: string;
  public cours: Cours;
}
