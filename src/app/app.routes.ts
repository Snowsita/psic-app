import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Chat} from './pages/chat/chat';
import {Journal} from './pages/journal/journal';
import {Login} from './pages/login/login';
import {Recommendations} from './pages/recommendations/recommendations';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'chat',
    component: Chat
  },
  {
    path: 'journal',
    component: Journal
  },
  {
    path: '',
    component: Login
  },
  {
    path: 'recommendations',
    component: Recommendations
  },
];
