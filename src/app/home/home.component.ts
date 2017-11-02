import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;profile;
  users: {};profiles:{};
  degree:'celcius'
  constructor(private userServiceService: UserServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userServiceService.getUsers();
  }

  getUsersProfile():void{
    this.userServiceService.getUser().subscribe(data => this.profiles = data);
  }


}
