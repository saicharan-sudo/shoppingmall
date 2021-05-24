import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonserverService } from './jsonserver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:JsonserverService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp=new FormGroup({
    brandName:new FormControl('',Validators.required),
    productName:new FormControl('',Validators.required),
    description:new FormControl('',[Validators.required,
      Validators.minLength(5)]),
      price:new FormControl('',Validators.required)
  })
  get f() {
    return this.signUp.controls
  }
  submitted = false;
  submitreactive(data:any){
    if(this.signUp.invalid){
      this.submitted=true
    }else{
    this.service.postData(data).subscribe((data:any)=>{
      this.router.navigate(['/main/amul'])
      })
    }
    }
}
