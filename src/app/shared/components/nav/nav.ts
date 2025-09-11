import { Component,signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly foto = signal ('assets/logo.png');

}
