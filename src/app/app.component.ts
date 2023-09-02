import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.testMethod()
  }
  title = 'AngularPractice2';
  prop!: string;
  testMethod() {
    if(this.prop) {
      console.log( '@@@@' +'kamal')
    }
  }
}
