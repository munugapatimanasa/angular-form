import { Component } from '@angular/core';
import{User} from './user';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['angular','react','vue'];
  userModel=new User('manu','manu@gmail.com',8465911517,'','morning',true);


onSubmit(){
  console.log (this.userModel);

}
}