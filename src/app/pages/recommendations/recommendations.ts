import { Component } from '@angular/core';
import { MobileScreenComponent } from '../../components/mobile-screen/mobile-screen';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [MobileScreenComponent],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss'
})
export class Recommendations {

}
