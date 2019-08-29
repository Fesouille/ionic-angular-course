import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleManagerService {
  peopleChanged = new Subject<string[]>();
  people: string[] = [];

  constructor() { }

  getAllPeople() {
    return [...this.people];
  }

  addPeople(name: string) {
    this.people.push(name);
    this.peopleChanged.next(this.people);
  }
}
