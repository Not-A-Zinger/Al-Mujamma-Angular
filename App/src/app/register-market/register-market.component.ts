import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-market',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-market.component.html',
  styleUrl: './register-market.component.css',
})
export class RegisterMarketComponent {
  constructor(private route: Router, private http: HttpClient) {}
  marketName!: string;
  branch!: string;
  email!: number;
  password!: string;
  phone!: string;
  comRegister!: File;
  icon!: File;

  registerForm(form: NgForm) {
    let body = form.value;
    if (form.valid) {
      this.http
        .post('https://674a8df5868020296634c6cd.mockapi.io/database', body)
        .subscribe((data) => {
          console.log(data);
        });
      this.route.navigate(['login/market']);
    }
  }
}
