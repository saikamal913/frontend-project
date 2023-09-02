import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit,OnChanges{
  usersArray = [
    {name:'productionServer', id:1,server:'offline'},
    {name:'testServer', id:2,server:'online'},
    {name:'DevServer', id:3,server:'offline'}
  ]
  _id!: number;
  isActive: boolean = false;
  yourServer!: string;
  yourServerStatus!: string;
  somenew!:any;
 

constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private service:UserService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('@@@@@   oaoao kamal')
  }

  ngOnInit(): void {
 
this._activatedRoute.paramMap.subscribe(params => {
  this._id = Number(params.get('ServerId'))

})
this.service.getUsers().subscribe((persons) => {
 this.somenew = persons
})
setTimeout(() => {
  console.log(this.somenew)
},1000);
this.method1()

}
method1() {
  // let isPower
  // function powerof2(num:number) {
  //   if(num === 0 ) {
  //     isPower = true
  //   }
  //   else if(num >= 1) {
  //     if(num % 2 === 0) {
  //       isPower = true
  //       num = num/2
  //       powerof2(num)
  //     }
  //     else {
  //       isPower = false
  //     }

  
  //  }
  // else {
  //   isPower = false
  // }
  // return isPower
  // }
  // console.log(powerof2(8))
}
value:string | undefined
 array = [1,2,3,-3,4,-12,-1,10];
 array1 = [...this.array]
 addClick() {
  this.array1 = this.array.filter(item => item>0)
 }
 subClick() {
  this.array1 = this.array.filter(item => item<0)
 }
 sumClick() {
  this.array.reduce((accum,item) => {
 return  accum + item
  },0)
 }



// numbersString:string = ''
// numbersString1:string = ''

// buttonClick() {
//  let numbersArray:any = []
//   let  findIndex:any = []
//  this.numbersString.split('').forEach((item,index) => {
//   if(item == '-') {
//   findIndex.push(index)
//   }
//  })
//  numbersArray = this.numbersString.split('-').join('').split('').reverse()
//  findIndex.forEach((item:any) => numbersArray.splice(item,0,'-'))
//   this.numbersString1 = numbersArray.join('')
// }

getUsers() {
  this.service.getUsers().subscribe((persons) => {
    console.log(persons)
  })
}

getUser() {
  this.service.getUser().subscribe((person) => {
    console.log(person)
  })
}
  onClickProductionServer(id:number) {
    this._router.navigate(['server',id],{queryParams:{loader:id}})
  }

  onChangeServerButton() {
  this.isActive = true
  }
  onClickSubmit() {
    this.usersArray[this._id-1].name = this.yourServer
  }
  onClickStatus() {
    this.usersArray[this._id-1].server = this.yourServerStatus
  }
  // prop!: string;
  // x: boolean = true;
  // value: string ='';

  // isPalin!: boolean;

  // onClick() {
  //   this.isPalin = this.value === this.value.split('').reverse().join('');
  //   this.x= false
  //   setTimeout(() => {
  //     this.x = true
  //   }, 1000);
  // }
 
}
