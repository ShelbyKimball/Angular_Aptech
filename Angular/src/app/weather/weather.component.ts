import {Component, ViewChild} from "@angular/core";
import {HttpClient,HttpHeaders,HttpParams} from "@angular/common/http";
import {Weather} from "../data/weather";
import {NgForm} from "@angular/forms";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
})
export class weatherComponent{
  @ViewChild("f") formSearch!: NgForm;
  constructor(private http: HttpClient) {

  }

  weather: Weather = new Weather();
  ngOnInit(){ //hàm chạy sau khi tạo xong giao diện -> gọi các api dữ liệu ban đầu ở đây(an toàn)
    this.getData("hanoi,Vietnam");
  }//lifecycle of component
  getData(city: string){
    let url = "https://api.openweathermap.org/data/2.5/weather";
    let parameters = new HttpParams();
    parameters = parameters.append("q",city);
    parameters = parameters.append("units","metric");
    parameters = parameters.append("appid","09a71427c59d38d6a34f89b47d75975c");
    this.http.get(url,{
      params: parameters
    }).subscribe((data:any)=>{
      this.weather.city = data.name;
      this.weather.country = data.sys.country;
      this.weather.temp = data.main.temp;
      this.weather.humidity = data.main.hudmidity;
      this.weather.pressure = data.main.pressure;
      this.weather.description = data.weather[0].description;
      console.log(data)
    })
  }
  onSubmit(){
    let city = this.formSearch.value.city;
    this.getData(city);
  }
}
