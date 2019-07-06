import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeNav: string;
  isMobileMenuExpanded = false;

  constructor(
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

    this.router.navigate([location, char, blankSlate]);
  }

}
