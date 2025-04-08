import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-half-moon',
  templateUrl: './half-moon.component.html',
  styleUrls: ['./half-moon.component.scss']
})
export class HalfMoonComponent implements OnInit, OnChanges {
  @Input() deadLine:any;
  public finalDate:any;
  public slides = [
    {
      id: 'slide1',
      heading: 'Slide 1 Heading',
      description: 'This is the description for slide 1. Lorem ipsum dolor sit amet.',
      imgUrl: 'assets/images/slide1.jpg'
    },
    {
      id: 'slide2',
      heading: 'Slide 2 Heading',
      description: 'This is the description for slide 2. Consectetur adipiscing elit.',
      imgUrl: 'assets/images/slide2.jpg'
    },
    {
      id: 'slide3',
      heading: 'Slide 3 Heading',
      description: 'This is the description for slide 3. Quisque suscipit lacus at arcu.',
      imgUrl: 'assets/images/slide3.jpg'
    }
  ];

  currentIndex: number = 0;
  public pageName: string | null = null;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pageName = params['pageName'];
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    var dateObj = new Date(this.deadLine);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    this.finalDate = formattedDate;
    
    console.log(this.finalDate);
  }

  

  goToAbstractSubmission() {
    this.router.navigate(['abstract-submission'], { relativeTo: this.route });
  }

}
