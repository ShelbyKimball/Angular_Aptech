import{Component} from "@angular/core";
@Component({
  selector: "classroom",
  templateUrl: "./classroom.component.html",
  styleUrls: ["classroom.component.css"]
})
export class classroomComponent{
  alowAddStudent: boolean = false;
  studentName: string = "";
  notification: string = "No student was created";
  created: boolean = false;
  sinhviens = [
    "Nguyen Minh Khoa",
    "Dam Thanh Huyen",
  ];

  constructor() { //hàm khởi tạo - thực thi ngay tại thời điểm tạo đối tượng
    setTimeout( ()=>{
      this.alowAddStudent = true;
    },2000);
  }
  onCreateStudent(){
    if (this.studentName.length > 0){
      this.sinhviens.push(this.studentName);
      this.notification = "Student"+ this.studentName + "was created!";
      this.studentName = "";
      this.created = true;
    }
  }
}
