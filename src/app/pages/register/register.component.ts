import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ValdemortModule } from 'ngx-valdemort';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { passwordMatchingValidator } from './register.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
    ValdemortModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  private formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private emailCtrl!: FormControl<string | null>;
  private passwordCtrl!: FormControl<string | null>;
  private confirmPasswordCtrl!: FormControl<string | null>;

  public registerFm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    confirmPassword: FormControl<string | null>;
  }>;

  constructor(formBuilder: NonNullableFormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(8)]);
    this.confirmPasswordCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(8)]);

    this.registerFm = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, { validators: passwordMatchingValidator });

    this.passwordCtrl.valueChanges.pipe(
      // only recompute when the user stops typing for 400ms
      debounceTime(400),
      // only recompute if the new value is different from the last
      distinctUntilChanged()
    ).subscribe();
  }

  onSubmit(): void {

  }
}
