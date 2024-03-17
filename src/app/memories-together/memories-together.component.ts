import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memories-together',
  templateUrl: './memories-together.component.html',
  styleUrls: ['./memories-together.component.css'],

})

export class MemoriesTogetherComponent {

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/']); // Navigate back to the 'app' route (AppComponent)
  }
  memories: { imageUrl: string, caption: string }[] = [
    { imageUrl: 'assets/1.jpg', caption: 'Caption 1' },
    { imageUrl: 'assets/2.jpg', caption: 'Caption 2' },
    { imageUrl: 'assets/3.jpg', caption: 'Caption 3' },
    { imageUrl: 'assets/4.jpg', caption: 'Caption 1' },
    { imageUrl: 'assets/5.jpg', caption: 'Caption 2' },
    { imageUrl: 'assets/6.jpg', caption: 'Caption 3' },
    { imageUrl: 'assets/7.JPG', caption: 'Caption 3' },
    { imageUrl: 'assets/8.JPG', caption: 'Caption 3' }
    // Add more images and captions as needed
  ];
}
