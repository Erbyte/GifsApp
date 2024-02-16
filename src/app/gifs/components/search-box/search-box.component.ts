import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) { }

  // ViewChild solo un elemento HTML
  // ViewChildren un arreglo de elementos HTML
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // Sin ViewChild
  /* public searchTag(newTag: string): void {
    console.log({newTag});
  } */

  // Con ViewChild
  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
