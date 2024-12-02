import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-collector',
  imports: [FormsModule, CommonModule],
  templateUrl: './register-collector.component.html',
  styleUrl: './register-collector.component.css',
})
export class RegisterCollectorComponent {
  constructor(private route: Router, private http: HttpClient) {}
  username!: string;
  phone!: string;
  ageSelection!: number;
  email!: string;
  password!: string;
  market!: string;
  idNum!: string;
  idDoc!: File;
  showMarket() {
    document.getElementById('marketNumber')!.style.display = 'none';
    document.getElementById('marketLabel')!.style.display = 'none';
    document.getElementById('location')!.style.display = 'inline-block';
    document.getElementById('locationLabel')!.style.display = 'inline-block';
    document.getElementById('marketValidation')!.style.display = 'none';
  }
  hideMarket() {
    document.getElementById('marketNumber')!.style.display = 'inline-block';
    document.getElementById('marketLabel')!.style.display = 'inline-block';
    document.getElementById('location')!.style.display = 'none';
    document.getElementById('locationLabel')!.style.display = 'none';
    document.getElementById('marketValidation')!.style.display = 'inline-block';
  }
  calcAge(input: any) {
    let now = new Date();
    let dob = new Date(input.value);
    let difference = now.getTime() - dob.getTime();
    let age = difference / 1000 / 60 / 60 / 24 / 365.25;
    return age;
  }
  registerForm(form: NgForm) {
    console.log(form.valid, form.value);
    let body = {
      name: form.value.username,
      email: form.value.email,
      phone: form.value.phone,
      password: form.value.password,
      user_type_id: 2,
      date_of_birth: form.value.ageSelection,
      identification_number: form.value.idNum,
      identification_card_document: form.value.idDoc,
      market_id: form.value.market,
    };
    if (form.valid) {
      this.http
        .post('https://674a8df5868020296634c6cd.mockapi.io/database', body)
        .subscribe((data) => {
          console.log(body);
        });
      this.route.navigate(['login/collector']);
    }
  }
}
