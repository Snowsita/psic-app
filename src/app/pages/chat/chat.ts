import { Component } from '@angular/core';
import { MobileScreenComponent } from '../../components/mobile-screen/mobile-screen';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MobileScreenComponent],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {

}
