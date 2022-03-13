import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features: any;
  constructor() {
    this.features =
      [
        {
          name: 'Product List',
          description: 'Sample Product List',
          icon: 'far fa-file-alt',
          link: 'products'
        },
        {
          name: 'Help Me',
          description: 'Simple flexible designers & developers',
          icon: 'fa-share-alt-square',
          link: 'about'
        },
      ];
  }

  ngOnInit(): void {
  }

}
