import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CharacterService } from '../services/character.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.component.html',
  styleUrls: ['./char-select.component.scss']
})
export class CharSelectComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef,
    private characterSvc: CharacterService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToCharacter(charID: number): void {
    const location = 'tb';
    const char = this.characterSvc.getCharacterByID(charID).name;
    const blankSlate = this.characterSvc.getBlankSlate(charID);

    this.router.navigate([location, char, blankSlate]);
    this.bsModalRef.hide();

  }

}
