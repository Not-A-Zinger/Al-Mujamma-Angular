import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent, link } from '../app.component';

@Component({
  selector: 'app-register-market',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-market.component.html',
  styleUrl: './register-market.component.css',
})
export class RegisterMarketComponent {
  constructor(private route: Router, private http: HttpClient) {}
  name!: string;
  branch!: string;
  email!: number;
  phone!: string;
  password!: string;
  marketName!: string;
  comRegister!: File;
  marketLogo!: File;
  comNum!: string;
  registerForm(form: NgForm) {
    let formData = new FormData();
    let doc = document.getElementById('comRegister') as HTMLInputElement;
    let icon = document.getElementById('marketLogo') as HTMLInputElement;
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('password', form.value.password);
    formData.append('user_type_id', '3');
    formData.append('market_name', form.value.marketName);
    formData.append('market_logo', icon.files![0]);
    formData.append('commercial_register_document', doc.files![0]);
    formData.append('market_branch', form.value.branch);
    formData.append('commercial_register_number', form.value.comNum);
    formData.append('number_of_collectors', '1');
    console.log(formData);
    console.log(form.valid);
    if (form.valid) {
      this.http.post(link.api, formData).subscribe((data) => {
        console.log(data);
      });
      this.route.navigate(['login/market']);
    }
  }
}
