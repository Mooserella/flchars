import { Injectable } from '@angular/core';
import {FormBuilder,FormGroup, FormArray,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
observers = []

models =  {forbidden_lands:{key: 'forbidden_lands', title:'Forbidden Lands'},
coriolis:{key: 'coriolis', title:'Coriolis'}};
model = null;

  constructor(private fb:FormBuilder) { }

multicastSubscriber(){
  return (observer) => {
    this.observers.push(observer);
    if (this.model){
      observer.next(this.model);
    }
    return {
      unsubscribe(){
        this.observers.splice(this.observers.indexOf(observer), 1);
      }
    }
  }
}

getModels(){
  const arr = []
  Object.keys(this.models).forEach(key =>arr.push(this.models[key]));
  return arr;
}

  setModel(key){
    
    this.model = this.fb.group({name:[this.models[key].title]})
    this.observers.forEach(observer => {
      observer.next(this.model);
    })
  }

  getModel(){
    return new Observable(this.multicastSubscriber())
  }
}
