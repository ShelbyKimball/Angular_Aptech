import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "app-assignment3",
  templateUrl: "./assignment3.component.html",
})
export class assignment3Component{
  @ViewChild('f') detailForm!: NgForm;
  onSubmit(){
    console.log(this.detailForm.value);
  }
}
