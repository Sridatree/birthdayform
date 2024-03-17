import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageModalComponent } from '../image-modal/image-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('balloonAnimation', [
      transition('* => void', [
        animate('0.5s', style({ transform: 'scale(0)' }))
      ])
    ]),
    trigger('moveButton', [
      state('initial', style({
        transform: 'translate(0, 0)'
      })),
      state('left', style({
        transform: 'translate(-500%, 0)'
      })),
      state('right', style({
        transform: 'translate(500%, 0)'
      })),
      state('up', style({
        transform: 'translate(0, -800%)'
      })),
      state('down', style({
        transform: 'translate(0, 500%)'
      })),
      transition('* => *', animate('500ms ease-out'))
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit{
  birthdayForm: FormGroup;
  showImage: boolean = false;
  showText: boolean = false;
  buttonState: string = 'initial'; // Button animation state
  moveCount: number = 0;
  balloons :number[]= [];
  showNopeText: boolean = false;
  @ViewChild('imageModal')
  imageModal!: ImageModalComponent;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.birthdayForm = this.formBuilder.group({});
  }

  goToMemories() {
    this.router.navigate(['/memories-together']);
  }
  isAppComponentRoute(): boolean {
    return this.router.url === '/';
  }

  ngOnInit() {
    this.balloons = Array.from({ length: 34 }, (_, index) => index + 1);
    this.popBalloonsAfterTimeout();
  }

  popBalloonsAfterTimeout() {
    setTimeout(() => {
      this.balloons = [];
      setTimeout(() => {
        this.balloons = Array.from({ length: 34 }, (_, index) => index + 1);
      }, 2000); // Adjust timeout as needed
    }, 2000); // Adjust timeout as needed
  }


  selectYes() {
    this.moveCount++;
    if (this.moveCount === 5 || this.moveCount === 10 || this.moveCount ===15) {
      this.imageModal.openModal();
    } else {
      this.buttonState = this.getNextState(this.buttonState);
    }
  }

  selectNo() {
    this.showText = true;
  }

  onSubmit() {
    this.selectYes();
  }
  toggleNopeText() {
    this.showNopeText = !this.showNopeText;
    if (this.showNopeText) {
      setTimeout(() => {
        this.showNopeText = false;
      }, 2000); 
    }
  }


  getNextState(currentState: string): string {
    switch (currentState) {
      case 'initial':
        return 'left';
      case 'left':
        return 'right';
      case 'right':
        return 'up';
      case 'up':
        return 'down';
      case 'down':
        return 'initial';
      default:
        return 'initial';
    }
  }

  popBalloon(index: number) {
    console.log("pop");
    this.balloons.splice(index, 1);
  }
}
