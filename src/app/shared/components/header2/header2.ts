import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from '../../../home/home';


@Component({
  selector: 'app-header2',
  imports: [RouterModule, Home],
  templateUrl: './header2.html',
  styleUrl: './header2.css'
})
export class Header2 {

}
