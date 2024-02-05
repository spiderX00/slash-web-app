import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ValdemortModule } from 'ngx-valdemort';

@Component({
  selector: 'app-user',
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
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  private formBuilder: NonNullableFormBuilder;
  public emailCtrl!: FormControl<string | null>;
  public nameCtrl!: FormControl<string | null>;
  public lastNameCtrl!: FormControl<string | null>;

  public userFm!: FormGroup<{
    email: FormControl<string | null>;
    name: FormControl<string | null>;
    lastName: FormControl<string | null>;
  }>;

  constructor(formBuilder: NonNullableFormBuilder) {
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.emailCtrl = this.formBuilder.control('');
    this.nameCtrl = this.formBuilder.control({ value: '', disabled: true });
    this.lastNameCtrl = this.formBuilder.control({ value: '', disabled: true });
    this.userFm = this.formBuilder.group({
      email: this.emailCtrl,
      name: this.nameCtrl,
      lastName: this.lastNameCtrl
    });
  }

  public onSubmit(): void {

  }
}
