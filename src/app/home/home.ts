import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Header } from '../shared/components/header/header';

@Component({
  selector: 'app-home',
  imports: [Nav,Footer,Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly foto = signal ('assets/osito.webp');


}
