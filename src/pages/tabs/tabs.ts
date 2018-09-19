import { Component } from '@angular/core';

import { RadioPlayerPage } from '../radio-player/radio-player';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RadioPlayerPage;


  constructor() {

  }
}
