import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header2 } from '../shared/components/header2/header2';
import { Footer } from '../shared/components/footer/footer';
import { Login } from '../login/login';

@Component({
  selector: 'app-tortas-tematicas',
  imports: [Nav,Header2,Footer,Login],
  templateUrl: './tortas-tematicas.html',
  styleUrl: './tortas-tematicas.css'
})
export class TortasTematicas {

}
