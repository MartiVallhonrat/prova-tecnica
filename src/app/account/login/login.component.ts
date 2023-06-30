import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login', 
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  form!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;
  success?: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {
      if (this.accountService.userValue) {
        this.router.navigate(['/home']);
      }
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.route.snapshot.queryParams['registered']) {
      this.success = 'Registration successful';
    }
  }

  onSubmit() {
    this.submitted = true;

    this.error = '';
    this.success = '';

    if (this.form.invalid) {
      this.error = "All the fields are required."
      return;
    }

    this.loading = true;
    this.accountService.login(this.form.value.username, this.form.value.password)
        .subscribe({
          next: () => {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
            this.router.navigateByUrl(returnUrl);
          },
          error: (error: any) => {
            this.error = error.error.message;
            this.loading = false;
          }
        });
  }
}
