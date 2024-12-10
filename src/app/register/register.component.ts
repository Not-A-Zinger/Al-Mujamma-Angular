import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { link } from '../app.component';

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
    let formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('password', form.value.password);
    formData.append('user_type_id', '1');
    console.log(form.valid);
    if (form.valid) {
      this.http.post(link.api, formData).subscribe((data) => {
        console.log(formData);
      });
      this.route.navigate(['login/customer']);
    }
  }
  phoneInfo() {
    let info = document.querySelector('.validInfo') as HTMLElement;
  }
  emptyInfo() {
    let info = document.querySelector('.validInfo') as HTMLElement;
    info.style.color = 'white';
  }
}
