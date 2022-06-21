import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FirebaseService } from 'src/app/service/firebase.service';
import { ItemService } from 'src/app/service/item.service';
export  interface Data{
  id?:number;
  // user?:string;
  // email?:string;
  // password?:string;
  img?:string,
  title?:string;
  des?:string;
  price?:number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// export class ProductComponent implements OnInit {
//   datalist:Data[]=[]

//   constructor(private firebase:FirebaseService, private cartServices: CartService) { }

//   ngOnInit(): void {
//   }
//   product=[
    
//     {
      
//       img:'assets/img/img4.jpg',
//       title:'Buy Carters 3-piece Bear Little Jacket Set-Pink White for Girls',
//       des:'(6-9 Months)',
//       price:1400
      
//     },
//     {
//       img:'assets/img/imgT1.webp',
//       title:'Toyshack Dessert Play set with Trolly',
//       des:'Special PriceGet extra 20% off upto ₹100 on 1 item(s)',
//       price:550
//     },
//     {
//       img:'assets/img/img1.jpg',
//       title:'Boys Stripe Newborn Boys Newbornunisex Bodysuits',
//       des:'Age(1-5 Monts)',
//       price:1500
//     },
//     {
//       img:'assets/img/img3.jpg',
//       title:'Boys Stripe Newborn Boys Newbornunisex Bodysuits',
//       des:'Age(1-5 Months)',
//       price:1600
//     },
//     {
//       img:'assets/img/img6.jpg',
//       title:'Buy Newborn infant Baby Girl Cloths Little  Cloths',
//       des:' Age(3-4 Months)',
//       price:1700
//     },
//     {
//       img:'assets/img/img2.jpg',
//       title:'Full Sleeve Solid Boys Jacket ',
//       des:'Age(4-7 Months)',
//       price:1800
//     },
//     {
//       img:'assets/img/img7.png',
//       title:'Summer baby   kids dress oem kids clothing baby clothes',
//       des:' Age(5-6 Months)',
//       price:1900
//     },
//     {
//       img:'assets/img/img8.jpg',
//       title:'Baby Boy Summer Romper Camo Print Clothes',
//       des:' Age(3-5 Months)',
//       price:2000
//     },
//     {
//       img:'assets/img/img18.webp',
//       title:'MY NEWBORN Baby Blanket Hooded Soft Towel',
//       des:' Age(0-6 years)',
//       price:2900
      
//     },
//     {
//       img:'assets/img/img17.jpg',
//       title:'MY NEWBORN Baby Cotton Bibs Combo',
//       des:' Age(0-1 years)',
//       price:2500
//     },
//     {
//       img:'assets/img/img16.jpg',
//       title:'Mee Mee Mild Baby Liquid Laundry Detergent (1.5 L - Bottle)',
//       des:' Age(0-10 Months)',
//       price:3900
//     },
//     {
//       img:'assets/img/img19a.webp',
//       title:'Momisy Half Sleeves Onesie & Tutu Skirt ',
//       des:' Age(12-24 Months)',
//       price:3500
//     },
//     {
//       img:'assets/img/img14.jpg',
//       title:' Baby Running Shoes for Baby Boys/Girls Age 3 Months s',
//       des:' Age(5-6 years)',
//       price:2100,
      
//     },
//     {
//       img:'assets/img/img13.jpg',
//       title:'Kids choice Unisex-Babys Casual Shoe',
//       des:' Age(5-6 years)',
//       price:2999
//     },
//     {
//       img:'assets/img/img12.jpg',
//       title:'CHIU Unisex-Babys Modern Shoes',
//       des:' Age(5-6 years)',
//       price:3950
//     },
//     {
//       img:'assets/img/img9.jpg',
//       title:'Coolz Kids Chu-Chu Sound Musical First Walking shoes',
//       des:' Age(5-6 years)',
//       price:3300
//     },
//     {
//       img:'assets/img/img7.webp',
//       title:'Girls Printed Cotton Blend T Shirt  (Multicolor, Pack of 5 ',
//       des:' Age(5-6 years)',
//       price:1700
//     },
//     {
//       img:'assets/img/imgT3.webp',
//       title:'Girls Party(Festive) Dress Cap  (Grey)  ',
//       des:' Age(5-6 years)',
//       price:2200
//     },
//     {
//       img:'assets/img/imgf1.webp',
//       title:'Boys Festive & Party Dress  ',
//       des:' Boys Festive & Party Dress',
//       price:1100
      
//     },
//     {
//       img:'assets/img/imgT2.webp',
//       title:'FTAFAT BEST BABY BIRTHDAY GIFT',
//       des:' Puzzle Assembling',
//       price:3399
//     },
//   ]
//   getproduct(){
//     this.firebase.getProduct().subscribe((res:any)=>{
//       this.datalist=res
//     })
//   }
export class ProductComponent implements OnInit {
  product: any =[];
  
  constructor( private items:ItemService,private cart:FirebaseService){}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.items.getPosts().subscribe((res:any)=>{
      this.product=res;
    })
  }

  addProduct(listdata:any){
    const payload=
    {
      id:listdata.id,
      img:listdata.img,
      title:listdata.title,
      des:listdata.des,
      price:listdata.price
      
    }
    this.cart.createProduct(payload);
    console.log(payload)
    
   

  }

}
