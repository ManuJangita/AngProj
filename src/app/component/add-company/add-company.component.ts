import { Component, Input, OnInit, Output } from '@angular/core';
import { Company } from '../../model/company.model';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent implements OnInit{
  @Output() eventEmitter: EventEmitter<boolean> =new EventEmitter();
  @Output("onSubmit") companyDataSubmit: EventEmitter<Company> =new EventEmitter();
  @Input()companyModel:Company;
  constructor(){

  }
  ngOnInit(): void {
      if(!this.companyModel){
        this.companyModel = new Company();
      }
  }

  CancelForm(){
    this.eventEmitter.emit(false);
  }
  handleSubmit(){
    this.companyDataSubmit.emit(this.companyModel);
  }

}
