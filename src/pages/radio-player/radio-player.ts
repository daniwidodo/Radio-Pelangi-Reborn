import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RadioSourceProvider } from '../../providers/radio-source/radio-source';

@IonicPage()
@Component({
  selector: 'page-radio-player',
  templateUrl: 'radio-player.html',
})
export class RadioPlayerPage {

  showButton : boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _player: RadioSourceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPlayerPage');
  }

  playStream(){
    console.log('Play Button clicked');
    this.showButton = true;
    this._player.playAudioProvider();
    //this.startMusicControls();
  }

  stopStream(){
    console.log('Stop Button');
    this.showButton = false;
    this._player.pauseProvider();
    //this._musicControls.updateIsPlaying(true);
  }

}
