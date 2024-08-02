import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppCustomValidate } from '../Validators/app-custom.validate';

@Component({
  selector: 'app-addreports',
  templateUrl: './addreports.component.html',
  styleUrl: './addreports.component.scss'
})
export class AddreportsComponent implements OnInit{
  reportctl:FormControl =new FormControl('',[AppCustomValidate()]);
  numberctl:FormControl =new FormControl('',[AppCustomValidate()]);

 // FormApp :FormGroup =new FormGroup({});
  // FormApp: FormGroup = new FormGroup({
  //   reportctl:new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   numberctl:new FormControl('',[Validators.required,Validators.minLength(4)]),
  // })
 constructor(/*private fb:FormBuilder*/){
  // this.FormApp = this.fb.group({
  //   reportctl:new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   numberctl:new FormControl('',[Validators.required,Validators.minLength(4)]),
  // })
 }
 ngOnInit(): void {
   
 }

//  get reportctl(){
//   return this.FormApp.get('reportctl');
//  }
}
