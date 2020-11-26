import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  userData = [];
  private userUpdatedValue = new Subject<any>();

  constructor() { }

  userDataListener(){
    return this.userUpdatedValue.asObservable();
  }

  getUserValue(data){
   // console.log(data,"data");
    this.userData.push(data);
    //console.log(this.userData);
    this.userUpdatedValue.next([...this.userData]);

  }
  getItems(){
    return this.userData;
  }
  deleteProd(data){
    const updatedPost = this.userData.filter(prod => prod !== this.userData[data]);
    this.userData = updatedPost;
    this.userUpdatedValue.next([...this.userData]);
  }
}
