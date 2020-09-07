import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent implements OnInit {

  private nameProp = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  get name(): string {
    return this.nameProp;
  }
  set name(name: string) {
    this.nameProp = (name && name.trim()) || '<without name>';
  }

}
