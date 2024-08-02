import { Component, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';
import { Console } from 'console';
import { CompanyService } from '../../service/company.service.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit{
 
  displayForm :boolean = false;
  companyModel:Company;
  selectIndex:number = -1;
  companies = []
  tempCompanies = [];
  constructor( private companyService:CompanyService) {
  }

  ngOnInit(): void {
   
  // async loadData(){
  //   let companiesData = await fetch("https://trinitstechnologies.com/demo/api/v1/companies");
  //   let companies = await companiesData.json();
  //   this.companies = companies;
  //   if(this.companies){
  //    this.tempCompanies = this.companies
  //   }
    this.companyService.loadCompanydata().subscribe((data:Company[])=>{
      this.companies = [...data];
      if(this.companies){
       this.tempCompanies = this.companies;
    }
    })
   }

  delete(index:number){
    let value = confirm("are u sure want to delete::"+index)
    if(value){
      let companyObject = this.companies[index];
      this.companyService.deleteCompanyData(companyObject.id).subscribe(()=>{
        this.companies.splice(index,1)
        alert("deleted successfully")
      })
    }
    else
      alert("invalid index")
  }

  addCompany(){
    this.companyModel=null;
    this.displayForm = true;
  }
  

  search(event:any){
    let val = event.target.value;
    if(val)
     // this.companies = this.companies.filter((value)=> value.companyName.toLowerCase().includes(val.toLowerCase()));
    this.companies = this.tempCompanies.filter((value)=> value.companyName.toLowerCase().indexOf(val.toLowerCase())>=0);
    else
      this.companies = this.tempCompanies;
}
handleCancelForm(event){
  this.displayForm = false;
}
handleFormDate(event){
  if(this.selectIndex>=0){
    this.companyService.updateCompanyData(event).subscribe((data)=>{
      alert("updated successfully");
    })
    this.companies[this.selectIndex] = event;
    this.displayForm = false;
  }else{
    this.companyService.saveCompanyData(event).subscribe(()=>{
      alert("saved successfully");
    })
    this.companies.push(event);
    this.displayForm = false
  }
}

editForm(index){
  this.companyModel = this.companies[index];
  this.displayForm = true;
  this.selectIndex = index;
} 

}
