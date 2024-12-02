import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private route: Router, private http: HttpClient) {}
  name!: string;
  phone!: string;
  email!: string;
  password!: string;
  registerForm(form: NgForm) {
    let customerInfo = {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      password: form.value.password,
      user_type_id: 1,
    };
    console.log(customerInfo);
    if (form.valid) {
      this.http
        .post(
          'https://674a8df5868020296634c6cd.mockapi.io/database',
          customerInfo
        )
        .subscribe((data) => {
          console.log(customerInfo);
        });
      this.route.navigate(['login/customer']);
    }
  }
}
