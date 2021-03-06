import { Component, OnInit } from '@angular/core';
import { JsrStatusService } from './jsr-status.service';
import { JSRStatus } from './JSRStatus';

@Component({
  selector: 'app-jsr-status',
  templateUrl: './jsr-status.component.html',
  styleUrls: ['./jsr-status.component.css'],
  providers: [JsrStatusService]
})
export class JsrStatusComponent implements OnInit {

  jsrStatusList : JSRStatus[];

  constructor(private jsrStatusService : JsrStatusService) { }

  ngOnInit() {
    this.jsrStatusService.loadStatus().subscribe(
      result => { this.jsrStatusList = result; console.log(this.jsrStatusList) },
      error => { console.log(error._body) }
    );
  }

}
