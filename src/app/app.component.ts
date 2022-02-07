import { Component } from '@angular/core';
import{UserService} from '../app/user.service';
import {Result} from '../app/Results';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trying-services';
  personImage: string = '';
  phoneImage: string = 'assets/smartphone.png';
  emailImage: string = 'assets/email.png';
  name: any = '';
  gender: any = '';
  email: any = '';
  phone: any = '';
  picture: string = '';
  constructor(private userService: UserService){
    this.name = 'Eugene Mark Oluoch';
    this.email = 'eugenemarkke@gmail.com';
    this.gender = 'male';
    this.phone = '0716276313';
    this.picture = 'assets/huey.png';
    this.personImage = 'assets/man.png';
  }
  getUsers(){
    this.userService.getUsers().subscribe(post=>{
      this.name = `${post.results[0].name.first} ${post.results[0].name.last}`;
      if(post.results[0].gender === 'male'){
        this.personImage = 'assets/man.png';
      }else{
        this.personImage = 'assets/woman.png';
      }
      this.gender = post.results[0].gender;
      this.email = post.results[0].email;
      this.phone = post.results[0].phone;
      this.picture = post.results[0].picture.large;
    })
  }
}
