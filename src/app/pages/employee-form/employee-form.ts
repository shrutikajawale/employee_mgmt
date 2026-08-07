import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { EmployeeModal } from '../../core/classes/Employee.Modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpolyeeService } from '../../core/services/empolyee-service';
import { MasterService } from '../../core/services/master-service';
import { IApiResponse, IchildDept, IParentDept } from '../../core/interface/User.Modal';

@Component({
  standalone: true,
  selector: 'app-employee-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit{
  employeeObj : EmployeeModal = new EmployeeModal();

  // UI-only selection holder for parent department
  selectedParentDept: number | '' = '';
  selectedChildDept: number | '' = '';

empserv = inject(EmpolyeeService);
masterserv = inject(MasterService);

parentDeptList : WritableSignal<IParentDept[]> = signal([]);
childDeptList : WritableSignal<IchildDept[]> = signal([]);

  ngOnInit(): void {
    this.getParentDept();
  }

  onEmployeesave(employeeObj:EmployeeModal){
    this.empserv.onCreateEmployee(this.employeeObj).subscribe({
      next :(res:EmployeeModal)=>{
         alert("employee created");
      },
      error:(error:any)=>{}
    });
  }

  getParentDept(){
    this.masterserv.getAllParentDept().subscribe({
      next:(res:IApiResponse)=>{
       this.parentDeptList.set(res.data);
       console.log("parntlist",this.parentDeptList);
      },
      error:(err:any)=>{

      }
    });
  }

  OnChnageParentId(event:any){
    const id = event.target.value;
    this.masterserv.getAllChildDeptbyParentId(id).subscribe({
      next:(res:IApiResponse)=>{
      this.childDeptList.set(res.data);
      },
      error:(err:any)=>{}
    });
  }
}
