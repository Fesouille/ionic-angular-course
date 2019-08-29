import { Component, OnInit } from '@angular/core';

import { PeopleManagerService } from '../people-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.page.html',
  styleUrls: ['./people-list.page.scss'],
})
export class PeopleListPage implements OnInit {
  people: string[];
  private peopleSubs: Subscription;

  constructor(private peopleManager: PeopleManagerService) { }

  ngOnInit() {
    this.people = this.peopleManager.getAllPeople();
    this.peopleSubs = this.peopleManager.peopleChanged.subscribe(people => {
      this.people = people;
    })
  }

}
