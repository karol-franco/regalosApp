import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header2 } from '../shared/components/header2/header2';
import { Footer } from '../shared/components/footer/footer';
import { Login } from '../login/login';

@Component({
  selector: 'app-regalos',
  imports: [Nav,Header2,Footer,Login],
  templateUrl: './regalos.html',
  styleUrl: './regalos.css'
})
export class Regalos {

}
