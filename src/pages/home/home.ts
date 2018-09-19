import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WpApiProvider } from '../../providers/wp-api/wp-api'
import { PostDetailPage } from '../post-detail/post-detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(
    public navCtrl: NavController,
    private _wpApi: WpApiProvider
    ) {

  }

  ngOnInit(){
    this.getPostList();
  }

  public async getPostList(){
    this._wpApi.getPosts()
    .then(data =>{ this.posts = data;
      console.log(this.posts);
    })
  }

  bacaPost(post){
    this.navCtrl.push(PostDetailPage, {'post':post})
    console.log('klik baca ...')
  }

}
