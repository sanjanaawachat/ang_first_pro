import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogs = [
    {
      date: 'Jan 15, 2025',
      title: 'Why Every Business Needs a Professional Website',
      description:
        'A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.'
    },
    {
      date: 'Jan 15, 2025',
      title: 'How Mobile Apps Help Businesses Grow',
      description:
        'Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.'
    },
    {
      date: 'Jan 15, 2025',
      title: 'Digital Marketing Strategies for Better Leads',
      description:
        'Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
