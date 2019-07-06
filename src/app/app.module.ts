import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
/* import { DrafterComponent } from './drafter/drafter.component';
import { SlidePanelComponent } from './drafter/slide-panel/slide-panel.component';
import { FormPanelComponent } from './drafter/form-panel/form-panel.component';
import { ResultPanelComponent } from './drafter/result-panel/result-panel.component'; */
// import { TreeBuilderComponent } from './tree-builder/tree-builder.component';
// import { TreeComponent } from './tree-builder/tree/tree.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TreeBuilderComponent } from './tree-builder/tree-builder.component';
import { TreeComponent } from './tree-builder/tree/tree.component';
import { FooterComponent } from './footer/footer.component';
import { CharSelectComponent } from './char-select/char-select.component';

@NgModule({
  declarations: [
    AppComponent,
    /*  NavbarComponent,
     DrafterComponent,
     SlidePanelComponent,
     FormPanelComponent,
     ResultPanelComponent,
     TreeBuilderComponent,
     TreeComponent, */
    DashboardComponent,
    NavbarComponent,
    TreeBuilderComponent,
    TreeComponent,
    FooterComponent,
    CharSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        // extendedTimeOut: 0,
        preventDuplicates: true,
        positionClass: 'toast-bottom-left',
        resetTimeoutOnDuplicate: true,
      }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent],
entryComponents: [CharSelectComponent],

})
export class AppModule { }
