import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {HttpClient,HttpHeaders,HttpParams} from "@angular/common/http";
import {Weather} from "../data/weather";

@Component({
  selector: "app-assignment4",
  templateUrl: "./assignment4.component.html",

})
export class assignment4Component{
  @ViewChild("f") selectCity!: NgForm;
  constructor(private http: HttpClient) {
  }
  weather = Weather[] = [];
  ngOnInIt(){
    this.getData("2022-01-07 15:00:00")
  }
  getData(city: string){
    let url = "http://api.openweathermap.org/data/2.5/forecast;
    let parameters = new HttpParams();
    parameters = parameters.append("q",city);
    parameters = parameters.append("units","metric");
    parameters = parameters.append("appid","09a71427c59d38d6a34f89b47d75975c");
    this.http.get(url,{
      params: parameters
    }).subscribe((data:any)=>{
      for (let i=0; i<data.list.length;i++){
        d.
      }
    })
  }
}
