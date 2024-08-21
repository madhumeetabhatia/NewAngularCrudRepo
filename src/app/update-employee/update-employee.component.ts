import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Address } from '../address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee : Employee = new Employee();
  eAddress : Address[] = [];
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee.id = this.id;
      this.employee.firstName = data.firstName;
      this.employee.lastName = data.lastName;
      this.employee.emailId = data.emailId;
     
      this.eAddress = Object.assign(this.employee.address);
      
      this.eAddress[0] = data.address[0];
      this.eAddress[1] = data.address[1];   
    }, error => console.log(error));
     
  }

    onSubmit(){
    
      
      this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      
    } , error => console.log(error));

      alert("Employee details Updated !");
      this.goToEmployeeList();
  }

    goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
