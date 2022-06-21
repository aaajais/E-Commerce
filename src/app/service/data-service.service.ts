import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

export interface Datastore{
  title:string;
  id:number;
  des:string;
  price:number;
  img:string;
  details: any;
  products: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  postcollection: AngularFirestoreCollection<Datastore> | any;
  posts: Observable<Datastore[]> | any;
  documentref:AngularFirestoreDocument<Datastore>|any;

  constructor(private auth:AngularFireAuth,private router:Router,private firebase:AngularFirestore) {
    this.postcollection = this.firebase.collection('items');
    this.posts = this.postcollection.snapshotChanges().pipe(map((change: any) => {
      return change.map((ref: any) => {
        const data = ref.payload.doc.data() as Datastore;
        data.id = ref.payload.doc.id;
        return data
      });

    })

    )
   }
   getProduct():any{
    return this.posts
  }
  createProduct(payload:any):any{
    this.postcollection.add(payload)
  }
  
  login(email:string,password:string){
    this.auth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true')
      this.router.navigate([''])
    },err=>{
      alert("Something went wrong")
    })
  }
  register(email:string,password:string,username:string){
    this.auth.createUserWithEmailAndPassword(email,password).then((data)=>{
      data.user?.updateProfile({displayName:username})
    
      alert('Register Success')
      this.router.navigate(['/login'])

    },err=>{
      alert("Something went wrong")
    })
  }
  
  deletePost(payload:any):any{
    this.documentref=this.firebase.doc('items/'+payload.id);
    this.documentref.delete()

}
isLoggedIn(): boolean{
  return localStorage.getItem('user') !== null;

}
}
