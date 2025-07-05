import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';

@Component({
  selector: 'app-mobile-screen',
  standalone: true,
  imports: [],
  templateUrl: './mobile-screen.html',
  styleUrl: './mobile-screen.scss'
})
export class MobileScreenComponent implements OnInit, OnDestroy {
  currentTime: string;
  private timer: any;

  constructor(private ngZone: NgZone) {
    this.currentTime = this.getCurrentTime();
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.ngZone.run(() => {
          this.currentTime = this.getCurrentTime();
        });
      }, 1000);
    });
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }
}
