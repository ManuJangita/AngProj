import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit {
  @Output() eventEmiter: EventEmitter<boolean> = new EventEmitter()
  @Output("onSubmit") eventSubmit: EventEmitter<Employee> = new EventEmitter()
  @Input("employee") EmployeeModel:Employee;
  constructor() { }
  ngOnInit(): void {
    if(!this.EmployeeModel){
        this.EmployeeModel = new Employee();
    }
  }
  handleCancelForm(){
    this.eventEmiter.emit(false)
  }
  handleSubmitDate(){
    this.eventSubmit.emit(this.EmployeeModel);
  }
}
