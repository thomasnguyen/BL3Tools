import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CharacterService } from '../services/character.service';
import { CharSelectComponent } from '../char-select/char-select.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeNav: string;
  isMobileMenuExpanded = false;
  charScreenRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private characterSvc: CharacterService,
    private router: Router,
  ) { }

  ngOnInit() {
    // get route
    const currentPath = window.location.pathname;
    if (currentPath.substr(1) === '') {
      this.activeNav = 'dashboard';
    } else {
      this.activeNav = currentPath.substr(1).split('/')[0];
    }
  }

  goTo(location: string): void {
    if (location === '/') {
      this.activeNav = 'dashboard';
    } else {
      this.activeNav = location;
    }
    this.router.navigate([location]);
    this.isMobileMenuExpanded = false;
  }

  goToCharacter(charID: number): void {
    const location = 'tb';
    const char = this.characterSvc.getCharacterByID(charID).name;
    const blankSlate = this.characterSvc.getBlankSlate(charID);
    this.activeNav = 'tb';

    console.log(this.activeNav);
    this.isMobileMenuExpanded = false;
    this.router.navigate([location, char, blankSlate]);
  }

  openCharSelect() {
    this.activeNav = 'tb';
    this.isMobileMenuExpanded = false;

    const initialState = {
      title: 'Choose your character',
      class: 'gray modal-lg'
    };
    this.charScreenRef = this.modalService.show(CharSelectComponent, { initialState });

  }

}
