import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { UserService } from '../../services/user.service'
import { AppModule } from 'src/app/app.module';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        AppModule
      ],
      providers: [
        UserService
      ]
    })
      .compileComponents();
  });




  describe('Cuando voy a insertar un nuevo usuario en el formulario', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(UserFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      userService = TestBed.inject(UserService);
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });


    it('deberia llamar la funcion showAlert("algo esta mal en el formulario")', () => {
      let form = { ...component.userFormGroup, value: { name: '', lastnName: '' } } as FormGroup;
      const spiaShowAlert = spyOn(component, 'showAlert');
      component.createNewUser(form);
      expect(spiaShowAlert).toHaveBeenCalled();
    });

    it('deberia llamar el servicio userService.setUser(this.userFormGroup.value)', () => {
      let form = { ...component.userFormGroup, value: { name: 'Juan', lastnName: 'Arias' }, valid: true } as FormGroup;
      const spiaSetUser = spyOn(userService, 'setUser');
      component.createNewUser(form);
      expect(spiaSetUser).toHaveBeenCalled();
    })
  })

});
