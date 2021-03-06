import {Cours} from './Cours';

export class User {
  public id?: number;
  public name?: string;
  public lastName?: string;
  public username?: string;
  public email?: string;
  public password?: string;
  public photoUrl?: string;
  public formateur?: boolean;
  public birthdate?: Date;
  public tel: string;
  public submitedCourses: [Cours];

}
