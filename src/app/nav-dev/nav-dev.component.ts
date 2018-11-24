import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-dev',
  templateUrl: './nav-dev.component.html',
  styleUrls: ['./nav-dev.component.css']
})
export class NavDevComponent implements OnInit {
  allRoutes: String[] = this.router.config.map(route => {
      return `/${route.path}`;
  }).filter(item => item !== '/');

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.allRoutes);
    // this.router.config.map(item => {
    //   console.log(item.component.name);
    // });
  }

}
