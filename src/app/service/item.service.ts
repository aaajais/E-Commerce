import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
export  interface Data{
  id?:number;
  img?:string,
  title?:string;
  des?:string;
  price?:number;
 
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getData() {

    throw new Error('Method not implemented.');

  }

  dataCollection: AngularFirestoreCollection<Data> | any;

  datas: Observable<Data[]> | any;

  documentReference: AngularFirestoreDocument<Data> | any;



  constructor(private fireStore:AngularFirestore, private auth:AngularFireAuth,private router:Router) {

    this.dataCollection = this.fireStore.collection('items');



    this.datas = this.dataCollection.snapshotChanges()

    .pipe(

      map((changes: any) =>{

        return changes.map((ref: any)=> {

          const data = ref.payload.doc.data() as Data;

          data.id = ref.payload.doc.id;

          return data;

        });

      })

    );

  }



  getPosts():any {

    return this.datas;

  }
}
