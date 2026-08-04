import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj : any = {
  "userName": " ",
  "password": " "
}
router = inject(Router);
constructor(private http:HttpClient){

}

onLogin(){
this.http.post(environment.API_URL + "login",this.loginObj).subscribe({
  next : (res:any)=>{
    console.log("response",res);
    if(res.result){
       this.router.navigateByUrl("/admin/dashboard");
    }else{
      alert(res.message);
    }
  },
  error : (err:any)=>{
    alert("API Error");
  }
})
}
}
