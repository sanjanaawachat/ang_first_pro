import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testinomial',
  templateUrl: './testinomial.component.html',
  styleUrls: ['./testinomial.component.css']
})
export class TestinomialComponent implements OnInit {


currentIndex = 0;

  testimonials = [

    {
      image: '/assets/images/3925e342ef990c1174411f2d43d1f6668cbd0d9b.jpg',
      name: 'Amit Verma',
      role: 'Marketing Head',
      text: 'Our business leads improved after working with them. Their digital strategy and execution were practical, clear, and result-focused.'
    },

    {
      image: '/assets/images/client1.png',
      name: 'Rahul Sharma',
      role: 'Business Owner',
      text: 'The team delivered our website exactly as we envisioned. Their professionalism, communication, and attention to detail made the entire process smooth and stress-free.'
    },

    {
      image: '/assets/images/client2.png',
      name: 'Priya Mehta',
      role: 'Startup Founder',
      text: 'They helped us build a clean and modern digital presence. The support was quick, friendly, and very professional throughout the project.'
    },

    {
      image: '/assets/images/client3.png',
      name: 'Raj Kapoor',
      role: 'Business Consultant',
      text: 'Excellent service and timely delivery. They understood our requirements properly and created a solution that matched our brand perfectly.'
    }

  ];


  ngOnInit(): void {

    setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;

    }, 4000);

  }
}



