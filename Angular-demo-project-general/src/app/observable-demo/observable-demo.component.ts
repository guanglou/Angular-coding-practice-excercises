import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  public employees = [];
  public errorMsg: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(
        data => this.employees = data,
        error => {
          console.log('GTest error!', error);
          this.errorMsg = 'GTest error!' + error;
        }
      );
  }

}
