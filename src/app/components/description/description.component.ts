import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

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

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  title:string=''
  img:string=''
  des:string=''
  price:Number=0
  details: any;
  products: any;

  constructor(private router:ActivatedRoute,private firebase:FirebaseService) { }

  ngOnInit(): void {
    this.title=this.router.snapshot.params['title']
    this.img=this.router.snapshot.params['img']
    this.des=this.router.snapshot.params['des']
    this.price=this.router.snapshot.params['price']
    this.image("box","myimage")
  }

  
  
addProduct(){
  const payload=
  {
    img:this.img,
    title:this.title,
    des:this.des,
    price:this.price
    
  }
  this.firebase.createProduct(payload);
 }

 image(id:string,id2:string){ 
  var zoom:any=document.getElementById(id) 
  var zimg:any=document.getElementById(id2) 
  zoom.addEventListener("mousemove",function(event:any){ 
      let clientX=event.clientX-zoom.offsetLeft; 
      let clientY=event.clientY-zoom.offsetTop 
      let w=zoom.offsetWidth; 
      let h=zoom.offsetHeight; 
      clientX=clientX/w *100; 
      clientY=clientY/h *100; 
      zimg.style.transform='translate(-'+clientX+'%,-'+clientY+'%) scale(2)' 
  }) 
  zoom.addEventListener("mouseleave",function(){ 
      zimg.style.transform='translate(-50%,-50%) scale(1)' 
  }) 
}

}
