import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  error?: string;
  hide: boolean = true;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) {

    if (this.accountService.userValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;

    this.error = '';

    if (this.form.invalid) {
      return;
    }

    this.accountService.register(this.form.value)
    .subscribe({
      next: () => {
        this.router.navigate(['/account'], { queryParams: { registered: true }});
     },
      error: (error: any) => {
        this.error = error;
      }
    });
  }
}
