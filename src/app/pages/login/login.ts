import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MobileScreenComponent } from '../../components/mobile-screen/mobile-screen';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MobileScreenComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private router: Router) {}

  onContinue(event: Event) {
    event.preventDefault();
    this.router.navigate(['/home']);
  }
}
