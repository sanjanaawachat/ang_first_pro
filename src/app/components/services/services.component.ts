import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
services = [
  {
    title: 'Web Development',
    desc: 'We design and develop responsive websites.',
    image: 'assets/images/service1.jpg',
    dark: false
  },
  {
    title: 'App Development',
    desc: 'Android and iOS applications.',
    image: 'assets/images/service2.jpg',
    dark: true
  },
  {
    title: 'Digital Marketing',
    desc: 'SEO, Social Media & Ads.',
    image: 'assets/images/service3.jpg',
    dark: false
  },
  {
    title: 'Technical Support',
    desc: 'Maintenance and IT support.',
    image: 'assets/images/service4.jpg',
    dark: true
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
