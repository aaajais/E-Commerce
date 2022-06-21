import { Component, OnInit } from '@angular/core';

import { FirebaseService } from 'src/app/service/firebase.service';

export interface Cart{
  Name?:string;
  id?:string;
  Description?:string;
  Price?:string;
  img?:string;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list:any[]=[]
 total:number=0


  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
    this.getdata()
    this.grandtotal()
  }
 
 

  getdata(){
    this.firebase.getProduct().subscribe((res: any)=>{
      this.list=res
     
      this.list.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });

      })

    })
  }
  deleteItem(val:any){
    this.firebase.deletePost(val)
  }



 
  inc(val:any){
    val.quantity +=1
    
  }
  dec(val:any){
    if(val.quantity !=1)
    val.quantity -=1
    
  }
  sum(val:any){
    let total=0;
    total=val.price*val.quantity
    return total
  }


  grandtotal(){
   let sum = 0
   for (let product of this.list){
     sum=sum+product.quantity*product.price
   }
   return sum
  }
}


