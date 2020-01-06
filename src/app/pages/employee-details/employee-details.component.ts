import { Employee } from '../../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../employee.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['create']);
  }
  cat() {
    this.router.navigate(['Cat']);
  }
  recherche() {
    this.router.navigate(['recherche']);
  }
  vente() {
    this.router.navigate(['vente']);
  }
  retour() {
    this.router.navigate(['article']);
  }
}
