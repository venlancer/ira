import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-block',
  templateUrl: './icon-block.component.html',
  styleUrls: ['./icon-block.component.scss']
})
export class IconBlockComponent implements OnInit {

  orbitIcons: string[] = [
    'dna',
    'pill',
    'ribbon',
    'test-tube',
    'apple',
    'atom',
    'flask-round',
  ];
  
  

  constructor() { }

  ngOnInit(): void {
    const nucleoView = document.getElementsByClassName('icon-orbit')[0];
    window.addEventListener('scroll', () => {
      if (this.isInViewport(nucleoView)) {
        nucleoView.classList.add('on-screen');
      } else {
        nucleoView.classList.remove('on-screen');
      }
    });
  }

  isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

}
