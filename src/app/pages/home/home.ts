import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MobileScreenComponent} from '../../components/mobile-screen/mobile-screen';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MobileScreenComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
