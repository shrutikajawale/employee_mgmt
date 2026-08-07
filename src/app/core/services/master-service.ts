import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IApiResponse } from '../interface/User.Modal';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http :HttpClient){

  }

  getAllParentDept():Observable<IApiResponse>{
    return this.http.get<IApiResponse>(environment.API_URL + "GetParentDepartment");
  }

  getAllChildDeptbyParentId(id:number):Observable<IApiResponse>{
     return this.http.get<IApiResponse>(environment.API_URL + "GetChildDepartmentByParentId?deptId" + id);
  }
}
