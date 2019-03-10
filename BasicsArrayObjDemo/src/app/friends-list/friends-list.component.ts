import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friendsNames : string[] = ["keyur","denish"];
  selectedName : string = '';
  errorMsg : string = '';

  constructor() {
    console.log("Always First while create object...!");
   }

  ngOnInit() {
    console.log("Always After Constructor it used for Initialization...!");
    this.friendsNames.push("vinit");
  }

  selSelectedName(name:string):void{
    console.log("Say Hi..."+name);
    this.selectedName = name;
  }

  addFriend(name:string):void{    
    if(this.friendsNames.length > 0 && this.friendsNames.indexOf(name) === -1){
      if(name === ''){
        this.errorMsg = 'Name can not be blank.';
      }else{
        this.errorMsg = '';
        this.friendsNames.push(name);      
      }            
    }else{
      this.errorMsg = 'Duplicate Name Not Allowed...!';  
    }
      
  }
  delete(idx:number):void{
    let confirmMsg = confirm("Are you sure want to delete?");    
    if(idx >= 0 && confirmMsg){
      this.friendsNames.splice(idx,1);
    }
  }
}
