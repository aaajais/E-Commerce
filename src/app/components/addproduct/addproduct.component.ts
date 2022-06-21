import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from 'src/app/service/data-service.service';

export interface Datastore{
  title:string;
  id:number;
  des:string;
  price:number;
  img:string;
}

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productDetails:Datastore = {
    title:'',
    id:0,
    des:'',
    price:0,
    img:'',
  };

  productList:any[] = []

  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.getitem()
    
  }
  getitem(){
    this.dataservice.getProduct().subscribe((res:any)=>{
      this.productList=res
    })
  }

  addProduct(postData:NgForm){
    const payload = {
      id: postData.value.id,
      title: postData.value.title,
      des: postData.value.description,
      price : postData.value.price,
      img: postData.value.img,
      
    }
    console.log(payload)
    this.dataservice.createProduct(payload);
    alert("Items added successfully")
    this.productDetails = {
      id:0,
      title:"",
      des:"",
      price:0,
      img:"",
      
    }
  }
  deleteItem(val:any){
    this.dataservice.deletePost(val)
  }
 editPost(data: any) 
   {
     this.productDetails.title=data.title
     this.productDetails.id=data.id
     this.productDetails.des=data.des
    this.productDetails.img=data.img
    this.productDetails.price=data.price
    console.log(data)

   }

}
