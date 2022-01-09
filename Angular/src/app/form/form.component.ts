import {Component, Input} from "@angular/core";
@Component({
  selector: "form",
  templateUrl: "./form.component.html"
})
export class formComponent{
  fullName: string = "";
  email: string = "";
  tel: string = "";
  address: string = "";
  gender: string = "";
  noti: string = "No student added";
  students = [""];
  stEmail = [""];
  stTel = [""];
  stAddress = [""];
  stGender = [""];
  afterAdded: boolean = false;

  onSubmit(){
    if (this.fullName.length > 0 && this.email.length > 0 && this.tel.length > 0 && this.address.length > 0){
      this.students.push(this.fullName);
      this.stEmail.push(this.email);
      this.stTel.push(this.tel);
      this.stAddress.push(this.address);
      this.stGender.push(this.gender);
      this.noti = "Student " + this.fullName + " added";
      this.fullName = "";
      this.email = "";
      this.tel = "";
      this.address = "";
      this.afterAdded = true;
    }
  }
}
