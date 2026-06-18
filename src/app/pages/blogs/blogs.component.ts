import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  newsList = [
    {
      title: 'Why Every Business Needs a Professional Website',
      desc: 'A well-designed website builds trust, showcases products and helps businesses attract customers online.'
    },
    {
      title: 'How Mobile Apps Help Businesses Grow',
      desc: 'Mobile apps improve customer engagement and provide a better digital experience.'
    },
    {
      title: 'Digital Marketing Strategies for Better Leads',
      desc: 'Smart digital marketing helps businesses reach the right audience and increase conversions.'
    },
    {
      title: 'Why Every Business Needs a Professional Website',
      desc: 'A well-designed website builds trust, showcases products and helps businesses attract customers online.'
    },
    {
      title: 'How Mobile Apps Help Businesses Grow',
      desc: 'Mobile apps improve customer engagement and provide a better digital experience.'
    },
    {
      title: 'Digital Marketing Strategies for Better Leads',
      desc: 'Smart digital marketing helps businesses reach the right audience and increase conversions.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
