import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-reg',
  templateUrl: './emp-reg.component.html',
  styleUrls: ['./emp-reg.component.css']
})
export class EmpRegComponent {
  eid=""
  fname=""
  lname=""
  hno=""
  hname=""
  sname=""
  pin=""
  dis=""
  state=""
  cry=""
  mno=""
  email=""
  pname=""
  grn=""
  hgd=""
  yoe=""
  doj=""
  ename=""
  psw=""
  cpsw=""


  constructor(private route:Router){}


  readValues=()=>
  {
    let data:any={
      "eid":this.eid,
      "fname":this.fname,
      "lname":this.lname,
      "hno":this.hno,
      "hname":this.hname,
      "sname":this.sname,
      "pin":this.pin,
      "dis":this.dis,
      "state":this.state,
      "cry":this.cry,
      "mno":this.mno,
      "email":this.email,
      "pname":this.pname,
      "grn":this.grn,
      "hgd":this.hgd,
      "yoe":this.yoe,
      "doj":this.doj,
      "ename":this.ename,
      "psw":this.psw,
      "cpsw":this.psw
    }
    console.log(data)

    if ( this.psw==this.cpsw)

    {
      
      alert("valid")
   }
 
   else {
 
     alert("invalid creditioanals")
 
   }
   
    
  }





}
