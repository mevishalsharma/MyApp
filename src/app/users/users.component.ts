import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any;
  rowSelected: boolean = false;
  selectUser: any;
 
   p: number = 1;
  constructor(private userServ: UserserviceService) { 
  
  }
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.userServ.getUserList().then(data => {
      this.userList = data;   
    });
  }

  onClick(data: any) {
    this.rowSelected = true;
    this.selectUser = data;
  }
  

  updateUser(data: any) {
    let d1 = this.userList.where(x => x.id == data.id);
    d1 = data;
    this.userList.remove(x => x.id == data.id);
    this.userList.push(d1);
  }
  
}
