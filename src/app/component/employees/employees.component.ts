import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit{
 
  displayForm:boolean = false;
  employeeModel:Employee;
  selectIndex:number = -1;
  employees = [];
  tempEmployees = [];
constructor() { }
ngOnInit(){
  this.loadEmployee();
  this.tempEmployees = this.employees;
}
  delete(index:number){
       let value= confirm("are u sure you want to delete"+index)
        if(value)
          this.employees.splice(index,1)
  }
  
  addEmployee(){
    this.employeeModel = null;
    this.displayForm=true
  }

  search(event:any){
    let val = event.target.value;
    if(val){
      //this.employees = this.tempEmployees.filter((value)=> value.company.toLowerCase().includes(val.toLowerCase()));
    this.employees = this.tempEmployees.filter((value)=> JSON.stringify(value).toLowerCase().indexOf(val.toLowerCase())>=0);
    }else{
      this.employees = this.tempEmployees;
    }
}
handleCancelForm(event){
  this.displayForm = false;
}
handleAddData(event){
  if(this.selectIndex>=0){
    this.employees[this.selectIndex] = event;
    this.displayForm = false;
  }else{
    this.employees.push(event)
    this.displayForm = false;
  }
}
edit(index){
  this.employeeModel = this.employees[index];
  this.displayForm = true;
  this.selectIndex =index;
}
async loadEmployee(){
  let employees=await fetch("https://trinitstechnologies.com/demo/api/v1/employees")
  let data = await employees.json();
  this.employees = data;
  console.log(this.employees);
  this.tempEmployees = this.employees;
}
}
