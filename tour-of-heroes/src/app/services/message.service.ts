import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export class Message {
  id: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  constructor() {}

  add(message: string): void {
    this.messages.push({
      id: String(Math.random() * 1000000),
      text: message,
    });
  }

  remove(id: string): void {
    _.remove(this.messages, { id });
  }

  clear(): void {
    this.messages = [];
  }
}
