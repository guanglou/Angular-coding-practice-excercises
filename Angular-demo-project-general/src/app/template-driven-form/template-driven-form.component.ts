import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  title = 'angular-form-tdf';
  topics: string[] = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errMsg;

  userModel = new User('Rob', 'rob@test.com', 1234567812, 'default', 'morning', true);


  constructor(private _enrollmentService: EnrollmentService){}


  ngOnInit() {

  }


  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userModel);

    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('success!', data),
        error => this.errMsg = error.statusText
      );
  }



}

