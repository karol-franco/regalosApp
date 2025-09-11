import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Header2 } from '../shared/components/header2/header2';
import { Footer } from '../shared/components/footer/footer';
@Component({
  selector: 'app-ocasiones',
  imports: [Nav, Header2,Footer],
  templateUrl: './ocasiones.html',
  styleUrl: './ocasiones.css'
})
export class Ocasiones {

}
