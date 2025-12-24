import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../notifications/toast.service';

type LoginForm = {
  username: FormControl<string>;
  password: FormControl<string>;
  remember: FormControl<boolean>;
};

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);

  protected readonly showPassword = signal(false);
  protected readonly submitting = signal(false);

  protected readonly form = new FormGroup<LoginForm>({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)]
    }),
    remember: new FormControl(true, { nonNullable: true })
  });

  protected get usernameCtrl(): FormControl<string> {
    return this.form.controls.username;
  }

  protected get passwordCtrl(): FormControl<string> {
    return this.form.controls.password;
  }

  toggleShowPassword(): void {
    this.showPassword.update((v) => !v);
  }

  async continue(): Promise<void> {
    // Temporary bypass until real auth backend is wired:
    // make route guards treat the user as authenticated and enter the default scene (/).
    try {
      localStorage.setItem('access_token', 'mock-access-token');
    } catch {
      // ignore storage failures; guard will still redirect to login
    }

    await this.router.navigateByUrl('/');
  }

  async submit(): Promise<void> {
    if (this.submitting()) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Enter your username and password.');
      return;
    }

    this.submitting.set(true);
    try {
      // NOTE: This is just a UI scene. Hook your real auth API here.
      // Mock "authentication": store a token so route guards treat the user as authenticated.
      try {
        localStorage.setItem('access_token', 'mock-access-token');
      } catch {
        // ignore storage failures; guard will still redirect to login
      }
      this.toast.success('Logged in (mock).');
      await this.router.navigateByUrl('/');
    } finally {
      this.submitting.set(false);
    }
  }
}


