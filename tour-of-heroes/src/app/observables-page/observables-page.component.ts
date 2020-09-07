import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-observables-page',
  templateUrl: './observables-page.component.html',
  styleUrls: ['./observables-page.component.css'],
})
export class ObservablesPageComponent implements OnInit {
  message$: Observable<string>;

  private messages = ['The first message', 'The second message', 'The third message'];

  constructor() {}

  ngOnInit(): void {
    this.resend();
  }

  resend(): void {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
