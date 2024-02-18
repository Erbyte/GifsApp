import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  @Input()
  public width: string = '35px';

  @Input()
  public height: string = '35px';

  public hasLoaded: boolean = false;

  constructor() {
    this.width = this.width + 'px';
    this.height = this.height + 'px';
  }

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000)
  }
}
