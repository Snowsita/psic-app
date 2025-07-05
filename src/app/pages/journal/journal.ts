import { Component } from '@angular/core';
import { MobileScreenComponent } from '../../components/mobile-screen/mobile-screen';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [MobileScreenComponent],
  templateUrl: './journal.html',
  styleUrl: './journal.scss'
})
export class Journal {

}
