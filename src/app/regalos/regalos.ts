import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header2 } from '../shared/components/header2/header2';
import { Footer } from '../shared/components/footer/footer';
import { Login } from '../login/login';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgStyle } from '@angular/common';

export interface Regalo {
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Component({
  selector: 'app-regalos',
  standalone: true,
  imports: [Nav, Header2, Footer, Login, CurrencyPipe, CommonModule, NgStyle],
  templateUrl: './regalos.html',
  styleUrls: ['./regalos.css']
})
export class Regalos {
  
  regalos = signal<Regalo[]>([
    { 
      nombre: 'Regalo master', 
      precio: 120000, 
      imagen: 'https://res.cloudinary.com/dtyvd3fim/image/upload/v1758194688/r4_kws4ow.jpg', 
      categoria: 'peluches'
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
      categoria: 'desayunos'
    },
    { 
      nombre: 'Desayuno Junior', 
      precio: 12000, 
      imagen: 'https://res.cloudinary.com/dtyvd3fim/image/upload/v1758194687/r3_ganlva.jpg', 
      categoria: 'desayunos'
    }
  ])
}
