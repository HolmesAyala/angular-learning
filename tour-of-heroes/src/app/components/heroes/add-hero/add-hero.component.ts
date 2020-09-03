import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  @Output() addHero = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddHero(name: string): void {
    if (name && name.trim()) {
      this.addHero.emit(name);
    }
  }
}
