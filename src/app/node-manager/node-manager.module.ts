import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentCommonModule, CovalentLayoutModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { NodeCreatorComponent } from './node-creator/node-creator.component';
import { LocationManagerMaterialModule } from './../location-manager.angular-material.module';


@NgModule({
  imports: [
    CommonModule,
    CovalentCommonModule,
    CovalentLayoutModule,
    BrowserAnimationsModule,
    LocationManagerMaterialModule

  ],
  declarations: [NodeCreatorComponent],
  exports: [NodeCreatorComponent]
})
export class NodeManagerModule { }
