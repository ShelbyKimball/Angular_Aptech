import{Component,ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class registerComponent{
  @ViewChild("f") registerForm!: NgForm;
  onSubmit(){
    console.log(this.registerForm.value);
  }
}
