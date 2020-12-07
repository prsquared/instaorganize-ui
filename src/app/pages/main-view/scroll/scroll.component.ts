import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor() {
    console.log(this.items);
  }
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  
}

