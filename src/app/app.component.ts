import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ModelService} from './services/model.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  games = [];
  game = null;
  constructor(private modelservice:ModelService){
    console.log(modelservice.getModels());
   this.games = modelservice.getModels();
   modelservice.getModel().subscribe((model:FormGroup) => {
     console.log('model',model)
  this.title = model.value.name})
    this.changeGame('forbidden_lands')
  }

change(event){
  this.changeGame(event.value.key);
}

  changeGame(game){
    console.log('changeGame',game)
    if (game){
     
      this.modelservice.setModel(game);
    }
  }
}
