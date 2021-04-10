import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private readonly userService: UserService) {
    this.userFormGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  createNewUser(): void {
    this.userService.setUser(this.userFormGroup.value);
    this.userFormGroup.reset();
  }

}
