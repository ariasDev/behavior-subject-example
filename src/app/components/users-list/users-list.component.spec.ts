import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service'
import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      providers: [
        UserService
      ]
    })
      .compileComponents();
  });

  describe('Al pintar la lista de usuarios', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(UsersListComponent);
      component = fixture.componentInstance;
      userService = TestBed.inject(UserService);
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    // it('should create', () => {
    //   const spiaSetUser = spyOn(userService, 'setUser');
    // });
  })

});
