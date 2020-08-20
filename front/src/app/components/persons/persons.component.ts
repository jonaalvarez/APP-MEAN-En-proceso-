import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';
import { Person } from 'src/app/models/person';

declare var M: any;

@Component({
  selector: 'app-person',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {
  public person : Person;

  constructor(public personService: PersonService) { }

  ngOnInit(){
    this.getPersons();
    this.person = new Person()
  }

  addPerson(){
    console.log(this.person)
    if(this.person._id){
      this.personService.putPerson(this.person)
      .subscribe(res => {
      M.toast({html: 'Update Successfuly'});
      this.getPersons();
      })
    }else{
    this.personService.postPerson(this.person)
    .subscribe(res =>{
      M.toast({html: 'Save Successfuly'});
    });
  }
}

  getPersons(){
    this.personService.getPersons()
    .subscribe(res => {
      this.personService.persons = res as Person[];
      console.log(res);
    });
  }

  editPerson(Person){
    this.personService.selectedPerson = Person;
  }

  deletePerson(_id){
  if(confirm('¿Estás seguro de eliminarlo?')){
    this.personService.deletePerson(this.person._id)
    .subscribe(res =>{
      this.getPersons();
      M.toast({html: 'Deleted successfully'});
    });
  }
}

}
