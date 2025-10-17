import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

import { MatButtonModule } from '@angular/material/button';
import { FormTextHelperComponent } from "../../../shared/components/form-text-helper/form-text-helper.component";
import { EncryptionService } from '../../services/encryption.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, MatButtonModule, FormTextHelperComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  encryptionService = inject(EncryptionService);
  authService = inject(AuthService);
  router = inject(Router);


  hasError = signal(false);

  fb = inject(FormBuilder);
  formUtils = FormUtils;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
    password: ['', [Validators.required]]
  })


  onSubmit() {
    //    this.encryptionService.setItem('token','12345641856512313');

    //    console.log('decode:', this.encryptionService.getItem('token'));

    if (this.loginForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 5000);
      return
    }

    const { email = '', password = '' } = this.loginForm.value;
    this.authService.login(email, password).
      then(() => {
        console.log("Inicio de sesion exitoso");
        this.router.navigateByUrl('/');
      })
    .catch((err) => console.error("Error en Inicio de sesion:", err));


  }


}
