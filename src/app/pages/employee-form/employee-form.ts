import { Component } from '@angular/core';
import { EmployeeModal } from '../../core/classes/Employee.Modal';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  employeeObj : EmployeeModal = new EmployeeModal();
}
