import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  selectedPerson : Person;
  persons: Person[];
  readonly URL_API = 'http://localhost:3030/api/persons';

  constructor(private http: HttpClient) {
    this.selectedPerson = new Person();
   }

  getPersons(){
    return this.http.get(this.URL_API);
  }

  postPerson(Person: Person){
    return this.http.post(this.URL_API, Person);
  }

  putPerson(person: Person){
    return this.http.put(this.URL_API + `/${person._id}`, person);
  }

  deletePerson(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
