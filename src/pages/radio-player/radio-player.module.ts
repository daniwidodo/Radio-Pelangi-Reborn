import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioPlayerPage } from './radio-player';

@NgModule({
  declarations: [
    RadioPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioPlayerPage),
  ],
})
export class RadioPlayerPageModule {}
