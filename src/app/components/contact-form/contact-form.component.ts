import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() cFMessage!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
