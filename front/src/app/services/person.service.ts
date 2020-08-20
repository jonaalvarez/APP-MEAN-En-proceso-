import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  selectedPerson : Person;
  persons: Person[];

  constructor(private http: HttpClient) {
    this.selectedPerson = new Person();
   }

  getPersons(){
    return this.http.get(environment.URL_API + 'persons');
  }

  postPerson(person: Person){
    return this.http.post(environment.URL_API + 'persons', Person);
  }

  putPerson(person: Person){
    return this.http.put(environment.URL_API + 'persons' + `/${person._id}`, person);
  }

  deletePerson(id: string){
    return this.http.delete(environment.URL_API + 'persons' + `/${id}`);
  }

}
