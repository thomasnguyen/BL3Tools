import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CharSelectComponent } from '../char-select/char-select.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  charScreenRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
  }

  openCharSelect() {
    const initialState = {
      title: 'Choose your character',
      class: 'gray modal-lg'
    };
    this.charScreenRef = this.modalService.show(CharSelectComponent, { initialState });
  }

}
