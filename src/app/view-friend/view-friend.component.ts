import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent {


  constructor(private api:ApiService)
{
  api.fetchfriend().subscribe(

    (Response)=>
    {
      this.loading=false
      console.log(Response)
      this.friends=Response;
    }
  )
}


 friends:any = []
 loading:boolean=true
}
