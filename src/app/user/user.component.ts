import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  showForm: boolean = false;
  @Input() user: any;
  @Output() updateUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

  showForms(isTrue: boolean) {
    this.showForm = isTrue;
    if (!isTrue)
      this.updateUser.emit(this.user);
  }

}




