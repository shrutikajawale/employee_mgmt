import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { EmployeeModal } from '../classes/Employee.Modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpolyeeService {
  constructor(private http : HttpClient){

  }

  onCreateEmployee(obj:EmployeeModal):Observable<EmployeeModal>{
    return this.http.post<EmployeeModal>(environment.API_URL + "createEmployee", obj);
  }
}
