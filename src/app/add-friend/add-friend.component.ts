import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  constructor(private api:ApiService){}


  readValues=()=>

{

 let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}

console.log(data)

this.api.addfriend(data).subscribe(
  (response:any)=>
  {
    console.log(response)
    if (response.status == "success") {

      alert("Added friend successfully")

      this.name=""

      this.friendName=""

      this.DescribeYourFriend=""

      this.friendNickName=""

      

    } else {

      alert("Something went wrong")

    }
  
  
  }
)


}
}
