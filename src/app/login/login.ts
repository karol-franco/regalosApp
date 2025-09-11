import { Component } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Register } from '../register/register';
import { Services } from '../services/services';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule, Nav,Footer,Header, Register],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; 
  isLoggedIn: boolean = false; 

  constructor(private authService: Auth, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.username, this.password)) {
      this.isLoggedIn = true;

      localStorage.setItem("username", this.username);
      
      this.router.navigate(['/home2']); // o la ruta que tengas
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}