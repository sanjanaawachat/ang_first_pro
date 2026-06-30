import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
services = [
  {
    title: 'Web Development',
    desc: 'Modern responsive websites and web applications.',
    image: '/assets/images/service1.png',
    dark: false
  },
  {
    title: 'UI/UX Design',
    desc: 'Creative and user-friendly design solutions.',
    image: '/assets/images/service2.png',
    dark: true
  },
  {
    title: 'Digital Marketing',
    desc: 'SEO, Social Media and Online Marketing services.',
    image: '/assets/images/service3.png',
    dark: false
  },
  {
    title: 'Mobile App Development',
    desc: 'Android and iOS application development.',
    image: '/assets/images/service4.png',
    dark: false
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
