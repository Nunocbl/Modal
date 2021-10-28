import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input("hidden") hidden:boolean = true;
  @Output() statechange = new EventEmitter<boolean>();

  @ViewChild('entry', {read: ViewContainerRef, static: true }) entry?: ViewContainerRef;


  theHtmlString:any = "<div class='box'><div><strong>Log:</strong></div><div class='log'></div><app-test></app-test></div>"


  constructor(private _resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.test()
  }
  test(){

  const factory = this._resolver.resolveComponentFactory(TestComponent);
     // this will insert your component onto the page
  const omponent = this.entry?.createComponent(factory);
 }

  switch(){
    this.hidden=!this.hidden
    this.statechange.emit(this.hidden)
  }


}
