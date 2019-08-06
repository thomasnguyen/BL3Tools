import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import html2canvas from 'html2canvas';

import { CharacterService } from '../services/character.service';
import { Character } from '../models/character.model';
import { BuildService } from '../services/build.service';
import { Skill } from '../models/skill.model';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-tree-builder',
  templateUrl: './tree-builder.component.html',
  styleUrls: ['./tree-builder.component.scss']
})
export class TreeBuilderComponent implements OnInit, OnDestroy {
  treeViewIndex = 0;
  character: Character;
  builds: any;
  totalSkillCount = 0;
  isAlive = true;
  pointLimit = 50;

  modalRef: BsModalRef;
  permalink: string;
  equippedSkills: any;
  constructor(
    private buildSvc: BuildService,
    private charSvc: CharacterService,
    private modalSvc: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    // get data from url
    this.route.paramMap.pipe(takeWhile(() => this.isAlive)).subscribe(params => {
      const charName = params.get('char');
      this.character = this.charSvc.getCharacterByName(charName);
      console.log(this.character);
      const buildToken = params.get('build');
      console.log('buildToken', params.get('build'));

      const getBuild = this.buildSvc.getTrees(this.character.uid, buildToken);

      this.builds = getBuild.builds;
      this.equippedSkills = getBuild.equippedSkills.equipArray;
      this.totalSkillCount = 4;
      if (this.builds) {
        this.builds.forEach((build) => {
          build.build.forEach((skill: Skill) => {
            if (skill.type === 'skill') {
              this.totalSkillCount += skill.skillCount;
            }
          });
        });
      }

    });
  }

  capture() {
    html2canvas(document.querySelector('#capture')).then(canvas => {
      document.body.appendChild(canvas);
    });
  }

  copyToClickBoard(route: string) {
    this.toastr.success('Link copied to clipboard');

    const el = document.createElement('textarea');  // Create a <textarea> element
    el.value = route;                                 // Set its value to the string that you want copied
    el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
    el.style.position = 'absolute';
    el.style.left = '-9999px';                      // Move outside the screen to make it invisible
    document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0        // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0)     // Store selection if found
        : false;                                    // Mark as false to know no selection existed before
    el.select();                                    // Select the <textarea> content
    document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el);                  // Remove the <textarea> element
    if (selected) {                                 // If a selection existed before copying
      document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
      document.getSelection().addRange(selected);   // Restore the original selection
    }
  }

  onPermalink(template: TemplateRef<any>) {
    // update route to true route
    this.updateRoute();

    this.modalRef = this.modalSvc.show(template);
    this.permalink = window.location.href;
  }

  updateRoute(): void {
    const builds = this.builds.map((ele) => {
      return {
        builds: ele['build']
      };
    });
    const trueRoute = this.buildSvc.getTrueRoute(builds);
    this.router.navigate(['tb/', this.character.name.toLowerCase(), trueRoute]);
  }

  onResetBuild(): void {
    this.router.navigate(['tb/', this.character.name.toLowerCase(),
      this.charSvc.getBlankSlate(this.character.uid)]);

    this.toastr.success('Build reset.');
  }

  decrementViewIndex() {
    if (this.treeViewIndex === 0) {
      this.treeViewIndex = 2;
    } else {
      this.treeViewIndex = (this.treeViewIndex - 1) % 3;
    }
  }
  incrementViewIndex() {
    this.treeViewIndex = (this.treeViewIndex + 1) % 3;
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

}
