import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // name:string='Asus';
  // price: number= 25000;
  // color: string ='Silver';
  // discountedPrice:number = 21000;
 name:string="Ravi";
 addToCart:number = 0;
  product ={
    name:'Asus',
    price: 76676,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    image: '/assets/save.jpeg'
  }

  getDiscountedPrice(){
   return this.product.price -(this.product.price * this.product.discount /100 )
  }

  getStock(){
     return this.product.inStock > 0 ? 'Only '+ this.product.inStock+' items left': 'Out of stock';
  }

  OnClick(){
    return console.log("Clicked");
  }

  onNameChange(event: any){
    this.name = event.target.value;
  }
  
  decrementalValue(){
    if(this.addToCart > 0)
      this.addToCart--;
  }
  incrementalValue(){
    if(this.addToCart < this.product.inStock)
     this.addToCart++;
  }
  
  searchText:string ='';
   
  setSearchText(value:string){
    this.searchText = value;
  }
   
   
   

}
