import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Header } from '../shared/components/header/header';

@Component({
  selector: 'app-carrito',
  imports: [Nav,Header,Footer],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

}
