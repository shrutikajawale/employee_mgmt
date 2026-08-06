import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Iuser } from '../../core/interface/User.Modal';
import { globalConstants } from '../../core/GlobalConstants/globalConstants';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedInData! : Iuser ; 
  router = inject(Router);
  constructor(){
     const localData = localStorage.getItem(globalConstants.Login_Local_key);
     if(localData){
      this.loggedInData = JSON.parse(localData);
     }
  }

  onLogoff(){
    localStorage.removeItem(globalConstants.Login_Local_key);
    this.router.navigate(['/login']);
  }
}
