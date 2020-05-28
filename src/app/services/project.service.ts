import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private fireStore: AngularFirestore) { }

  getProjects() {
    return this.fireStore
      .collection('projects', ref => ref.orderBy('order', 'desc'))
      .valueChanges();
  }
}
