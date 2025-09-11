import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header } from '../shared/components/header/header';
import { Footer } from '../shared/components/footer/footer';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [Nav, Header, Footer, FormsModule,CommonModule ],
  standalone:true,
  templateUrl: './register.html',
  styleUrl: './register.css'

})
export class Register {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router) {}


  onRegister() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.auth.register(user);   // 👈 Guardamos en localStorage
    alert('Usuario registrado con éxito');
    this.router.navigate(['/login']);   // 👈 Redirigir al login
  }
}