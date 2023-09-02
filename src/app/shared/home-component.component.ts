import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home-component', 
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  persons!: { name: string; id: number; }[];
  filteredPerson!: { name: string; id: number; }[];
 
  private _searchTerm!: string;
  get searchTerm() {
    return this._searchTerm
  }
  set searchTerm(value:string) {
    this._searchTerm = value
    this.filteredPerson = this.personsFiltered(value)
  }
 

  personsFiltered(searchString:string) {
    if(this.searchTerm) {
     return this.persons.filter((item:{name:string ,id:number}) => item.name.indexOf(searchString) !== -1)
    }
   return this.persons
  }
  onClick() {
    this._route.navigate(['user'],{queryParams:{'searchTerm':this.searchTerm}})
  }
  


  isLogin: boolean =false;
  constructor(private _route:Router, private activate:ActivatedRoute, private _personService:UserService) { }
  ngOnInit(): void {
   this.method4()
    this.persons = this._personService.persons
    this.filteredPerson = this.persons

   console.log(this.method())
  this.searchTerm = this.activate.snapshot.queryParamMap.get('searchTerm') as string
  }
    
  onLoadServer() {
this._route.navigate(['server', 0],{queryParams:{allowed:0}})
  }
  onClickLogin() {
this.isLogin = !this.isLogin
  }

  method() {
// function myFunction(str:String) {
  
//   const temp = str.split('').filter( (item,index,arr) => {
//     return arr.indexOf(item) !== index
//    })
// const temp1 = temp.filter( (item,index,arr) => {
//  return arr.indexOf(item) == index
// }).join(',')
// console.log(temp1)
// }
// myFunction('aaaabbbbvwqertyy')




// const letters = ['a','b','c','b','a','a']
// const newletters =letters.reduce((accum:any,item,index,arr) => {

//    accum[item] = (accum[item] || 0) +1
//    return accum
// },{})
// console.log(newletters)
  }
  
method4() {
  
  // let num:any = prompt('enter power value of 2')
  // let units
  // if(num%4 === 0) {
  //   units = 6   
  // }2
  //   if(num%4 === 1) {
  //     units = 2
  // }
  //  if(num%4 === 2) {
  //   units = 4
  // }
  //  if(num%4 ===3) {
  //   units = 8
  //  }
  // console.log(`${'the units digit of 2 power'}${num}${'='}${units}`)
// function myFunction() {
//   let x =1;
 
//  return function myFunction1(y:number) {
//     x= x+y;
//     return x
//   }
  

// }
// const newFunction = myFunction() 
// console.log(newFunction(2))



}


}
