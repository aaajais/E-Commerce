import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  total:number=0

  constructor(private auth:AngularFireAuth,private firebase:FirebaseService) { 
    this.auth.authState.subscribe((user)=>{
      this.user=user;
      
      // this.user=this.user.email.slice(0,1).toUpperCase()
    })
  }

  ngOnInit(): void {
    this.firebase.getProduct().subscribe((res:any)=>{
      this.total=res.length;
    })

  }
  logout(){
    this.auth.signOut()
  }
  

}
