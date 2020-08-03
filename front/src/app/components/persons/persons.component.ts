import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person';

declare var M: any;

@Component({
  selector: 'app-person',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {

  constructor(public personService: PersonService) { }

  ngOnInit(){
    this.getPersons();
  }

  addPerson(form: NgForm){
    if(form.value._id){
      this.personService.putPerson(form.value)
      .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Update Successfuly'});
      this.getPersons();
      })
    }else{
    this.personService.postPerson(form.value)
    .subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'Save Successfuly'});
      this.getPersons();
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

  editPerson(person: Person){
    this.personService.selectedPerson = person;
  }

  deletePerson(_id: string){
  if(confirm('¿Estás seguro de eliminarlo?')){
    this.personService.deletePerson(_id)
    .subscribe(res =>{
      this.getPersons();
      M.toast({html: 'Deleted successfully'});
    });
  }
}

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.personService.selectedPerson = new Person();
    }
  }

}
