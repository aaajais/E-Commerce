import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
export  interface Data{
  id?:string;
  user?:string;
  email?:string;
  password?:string;
  img?:string,
  title?:string;
  des?:string;
  price?:string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  
  postcollection: AngularFirestoreCollection<Data> | any;
  posts: Observable<Data[]> | any;
  documentref:AngularFirestoreDocument<Data>|any;

  constructor(private auth:AngularFireAuth,private router:Router,private firebase:AngularFirestore) {
    this.postcollection = this.firebase.collection('data');
    this.posts = this.postcollection.snapshotChanges().pipe(map((change: any) => {
      return change.map((ref: any) => {
        const data = ref.payload.doc.data() as Data;
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
    this.documentref=this.firebase.doc('data/'+payload.id);
    this.documentref.delete()

}
isLoggedIn(): boolean{
  return localStorage.getItem('user') !== null;
}
}