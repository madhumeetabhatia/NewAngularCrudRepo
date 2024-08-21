import { Address } from './../address';
//import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeObj : Employee =new Employee();

    
  employee : Employee =new Employee();

  empAddress : Address = new Address();
  mockAddress: Address[]=[];
        
  constructor( private employeeService: EmployeeService, private router: Router) { 
    
  }

  ngOnInit(): void {}
     addAddress()
     {
              //const strObj = JSON.stringify(this.employeeObj);
              //const empObj  = JSON.parse(strObj);
              
              /*this.empAddress = {
               "addressId" :0,
               "city" : "",
               "addressType" : "",
               "Id":0
               };*/
                 Object.assign(this.employee,this.employeeObj);
                
                //Object.assign(this.employee.address, this.employeeObj.address);
/* 
              for(let j=0; j< this.employeeObj.address.length; j++ )
             { 
             
                Object.assign(this.employee.address[j],this.mockAddress[j]);
           
           
            }   */
      }
     saveEmployee()
      {  
              /* const strObj = JSON.stringify(this.empAddress);
              const eAdd = JSON.parse(strObj);
              
              this.empAddress = {
               "addressId" :0,
               "city" : "",
               "addressType" : "",
               "Id":0
               };

             this.employee = Object.assign(this.employeeObj);
             
             for(let j=0; j< this.mockAddress.length; j++ )
             { 
             
               this.employee.address[j] =Object.assign(this.mockAddress[j]);
           
           
            } 
         */
         
           this.employeeService.createEmployee(this.employee).subscribe( data => {
            if (data)
            {
              alert("Employee added successfully:");
          
            }},  error => console.log(error.message));
                this.goToEmployeeList();   
       }

       goToEmployeeList()
       {
         this.router.navigate(['/employees']);
       }
  
     
}
