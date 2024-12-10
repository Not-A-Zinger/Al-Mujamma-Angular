import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { link } from '../app.component';

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
  dob!: Date;
  email!: string;
  password!: string;
  marketNumber!: string;
  idNum!: string;
  idDoc!: File;
  marketProof!: String;
  showMarket() {
    document.getElementById('marketNumber')!.style.display = 'none';
    document.getElementById('marketLabel')!.style.display = 'none';
    document.getElementById('marketValidation')!.style.display = 'none';
  }
  hideMarket() {
    document.getElementById('marketNumber')!.style.display = 'inline-block';
    document.getElementById('marketLabel')!.style.display = 'inline-block';
    let marketNumber = document.getElementById(
      'marketNumber'
    ) as HTMLInputElement;
    marketNumber.value = '';
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
    //formData.append('work_prove_document', file.files![0]);

    if (form.valid) {
      let file1 = document.getElementById('idDoc') as HTMLInputElement;
      let file2 = document.getElementById('marketProof') as HTMLInputElement;
      let formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('email', form.value.email);
      formData.append('phone', form.value.phone);
      formData.append('password', form.value.password);
      formData.append('user_type_id', '2');
      formData.append('date_of_birth', form.value.dob);
      formData.append('identification_number', form.value.idNum);
      formData.append('work_prove_number', file2.files![0]);
      formData.append('identification_card_document', file1.files![0]);
      formData.append('market_id', form.value.marketNumber);
      this.http.post(link.api, formData).subscribe((data) => {});
      this.route.navigate(['login/collector']);
    }
  }
}
