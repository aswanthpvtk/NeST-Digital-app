import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  aname=""
  psw=""

  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={"aname":this.aname,"psw":this.psw}
    console.log(data)

    if ( this.aname=="admin" && this.psw=="12345")

    {
      this.route.navigate(['/vc'])
 
   }
 
   else {
 
     alert("invalid creditioanals")
 
   }
   
    
  }
}
