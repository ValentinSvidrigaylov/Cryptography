import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

if (mybutton) {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {  
    if (mybutton) {
      if (window.pageYOffset > 20 || window.pageYOffset > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
  }
}

@Component({
  selector: 'app-to-top-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button type="button" class="btn" id="btn-back-to-top" (click)="GoTop()" *ngIf="this.window.pageYOffset > 100vh">
              <i class="fas fa-arrow-up"></i>
            </button>`,
  styleUrls: ['./to-top-button.component.sass']
})
export class ToTopButtonComponent implements OnInit {
  window: any;
  showButton = false;

  GoTop() {
    this.window.scrollTo(0,0)
  }

  constructor(@Inject(DOCUMENT) private _document: any) { 
    this.window = this._document.defaultView
    window.addEventListener('scroll', function() {
      
      if (this.window.pageYOffset >= 250) {
        //this.showButton = this.window.pageYOffset > 25 ? true : false;
          // do something when scrolling down
      }
  
      if (this.window.pageYOffset < 250) {

          // do something when scrolling up, and enable the scroll-down event to fire once again
      }
    });
  }


  ngOnInit(): void {
  }

}
