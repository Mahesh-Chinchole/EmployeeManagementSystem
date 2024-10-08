import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';



@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
   id: number;
  employee: Employee ;

  constructor(private employeeService: EmployeeService, private router : Router,
    private route: ActivatedRoute) {}
  
  ngOnInit(){
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee(){
     this.employeeService.updateEmployee(this.id,this.employee) 
     .subscribe(data  => {
      console.log(data);
      this.employee = new Employee();
      this.goToEmployeeList();
    },
      error => console.log(error)
    );
  }
 

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    //console.log(this.employee);
    this.updateEmployee();
  }
  
  

  

}
