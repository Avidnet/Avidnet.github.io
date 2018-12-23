import { Component, OnInit, HostBinding } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  public images: GalleryItem[] = [];
  private gallerySize = 12; // please check assets/img/gallery to find out the number of images in the gallery

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.gallerySize; i++) {
      this.images.push(
        new ImageItem({ src: `assets/img/gallery/${i}.webp`, thumb: `assets/img/gallery/${i}.webp` })
      );
    }
  }
}
