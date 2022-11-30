import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  ename=""
  psw=""

  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={"ename":this.ename,"psw":this.psw}
    console.log(data)

    if ( this.ename=="admin" && this.psw=="12345")

    {
      this.route.navigate(['/ac'])
 
   }
 
   else {
 
     alert("invalid creditioanals")
 
   }
   
    
  }

}
