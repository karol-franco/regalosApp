import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // Registrar un usuario
  register(user: { username: string; email: string; password: string }): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Validar si ya existe
    const exists = users.some((u: any) => u.username === user.username);
    if (exists) {
      return false; // usuario ya existe
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  // Iniciar sesión
  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }
}