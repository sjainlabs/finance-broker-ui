import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup; // Reactive form instance
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Initialize the form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Mock user data and role-based access
      const mockUsers = [
        { email: 'loanseeker@example.com', password: 'password123', role: 'loan_seeker' },
        { email: 'investor@example.com', password: 'password123', role: 'investor' },
        { email: 'broker@example.com', password: 'password123', role: 'broker' },
        { email: 'admin@example.com', password: 'password123', role: 'admin' }
      ];

      const user = mockUsers.find(u => u.email === email && u.password === password);

      if (user) {
        // Store the user role in local storage
        localStorage.setItem('role', user.role);

        // Redirect based on the user's role
        switch (user.role) {
          case 'loan_seeker':
            this.router.navigate(['loan-seeker']);
            break;
          case 'investor':
            this.router.navigate(['investor']);
            break;
          case 'broker':
            this.router.navigate(['broker']);
            break;
          case 'admin':
            this.router.navigate(['dashboards/admin']);
            break;
        }
      } else {
        // Show error message if credentials are invalid
        this.errorMessage = 'Invalid email or password.';
      }
    }
  }

  goToRegistration(): void {
    this.router.navigate(['/register']);
  }
}
