import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  singleId!: number;
  constructor(private _route:Router, private _activatedRoute:ActivatedRoute) {}
ngOnInit(): void {
this._activatedRoute.paramMap.subscribe(params => {
  this.singleId = Number(params.get('customerId'))
})
}
customerArray = [
  {name:'kamal',id:1},
  {name:'bhaveth',id:2},
  {name:'navya',id:3},
]
onCustomerClick(customerId:number,customerName:string) {
this._route.navigate(['user',customerId,customerName])
}
numberArray = [
  {id:1,num:1},
  {id:2,num:2},
  {id:3,num:3},
]



addNewNumber(num:any) {
  const maxIndex = this.numberArray.length
  this.numberArray.push({id:maxIndex+1,num:num.num});
 
  console.log(this.numberArray)
 
}

deleteNumber(numId:number) {
  this.numberArray.splice(numId-1,1)
  console.log(this.numberArray)
}
}
