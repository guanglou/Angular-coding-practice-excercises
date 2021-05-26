import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/username.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  title = 'angular-reactive-forms';
  registrationForm: FormGroup;

  @Input() usertest: string;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {

  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)] ],
      email: ['vishwas@mail.com.au'],
      subscribe: [false],
      password: ['', Validators.required],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });

  }


  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control('first.last@mail.com'));
  }





  // registrationForm = new FormGroup({
  //   userName: new FormControl('Vishwas'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });


  // requires to load data for all fields, otherwise error happens
  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Bruce',
      email: 'gg@email.com',
      password: 'testa',
      confirmPassword: 'testa',
      address: {
        city: 'Syd',
        state: 'NSW',
        postalCode: '2000'
      }
    });
  }

  patchApiData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'testa',
      confirmPassword: 'testa'
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);

    this.registrationService.register(this.registrationForm.value)
      .subscribe(
        data => {
          console.log('success!', data);
          sessionStorage.setItem('sessionData', data);
          console.log('expiry date:', sessionStorage.getItem('sessionExpiry'));
        },
        error => console.log('error!', error)
      );
  }


}
