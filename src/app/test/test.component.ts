import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Output() test = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  alert(string:string){
    alert(string)
  }

  outputing(){
    this.test.emit()
  }


}
