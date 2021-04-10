import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: Array<any> = [];

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(newUser => {
      if (newUser) {
        this.usersList.push(newUser)
      }
    })
  }

}
