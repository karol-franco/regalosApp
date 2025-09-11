import { Component, OnInit } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Services } from '../services/services';
import { Router } from '@angular/router';
import { Header2 } from '../shared/components/header2/header2';


@Component({
  selector: 'app-home2',
  imports: [Nav, Header2, Footer, Services],
  templateUrl: './home2.html',
  styleUrl: './home2.css'
})
export class Home2  {
 username: string = '';

  
  constructor(private router: Router) {
    this.username = localStorage.getItem('username') || '';
  }

  get estaLogueado(): boolean {
    return !!this.username;
  }
  



  /* username: string ="";

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
  }*/


}
