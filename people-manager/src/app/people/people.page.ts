import { Component, OnInit } from '@angular/core';

import { PeopleManagerService } from './people-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  personNameEntered = '';
  message = '';

  constructor(
    private peopleManager: PeopleManagerService,
    private router: Router
    ) { }
  
  ngOnInit() {
  }

  onCreatePeople() {
    if (this.personNameEntered.trim().length <= 0) {
      return;
    }
    this.peopleManager.addPeople(this.personNameEntered);
    this.personNameEntered = '';
    this.router.navigate(['/people-list']);

  }
}
