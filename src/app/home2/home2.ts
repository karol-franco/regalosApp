import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Services } from '../services/services';
import { Router } from '@angular/router';
import { Header2 } from '../shared/components/header2/header2';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home2',
  imports: [Nav, Header2, Footer, Services, CurrencyPipe, CommonModule],
  templateUrl: './home2.html',
  styleUrl: './home2.css'
})
export class Home2  {
  username: string = '';

  regalosMasPedidos = signal<Regalo[]>([
    { 
      nombre: 'Regalo master', 
      precio: 120000, 
      imagen: 'https://res.cloudinary.com/dtyvd3fim/image/upload/v1758194688/r4_kws4ow.jpg', 
      categoria: 'flores'
    },
    { 
      nombre: 'Rosas Eternas', 
      precio: 80000, 
      imagen: 'https://res.cloudinary.com/dtyvd3fim/image/upload/v1758194687/r1_emhhfc.jpg', 
      categoria: 'flores'
    },
    { 
      nombre: 'Desayuno especial', 
      precio: 23000, 
      imagen: 'https://res.cloudinary.com/dtyvd3fim/image/upload/v1758194687/r2_s9a5p9.jpg', 
      categoria: 'flores'
    }
  ]);

  constructor(private router: Router) {
    this.username = localStorage.getItem('username') || '';
  }

  get estaLogueado(): boolean {
    return !!this.username;
  }
}

export interface Regalo {
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}
