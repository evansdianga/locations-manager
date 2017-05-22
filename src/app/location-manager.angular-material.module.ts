import { NgModule } from '@angular/core';
import { MdButtonModule, MdInputModule, MdGridListModule, MdListModule, MdCardModule, MdSelectModule, MdSlideToggleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CovalentStepsModule } from '@covalent/core';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

@NgModule({
    imports: [MdButtonModule, MdInputModule, MdGridListModule, MdListModule, MdCardModule, FormsModule, BrowserModule,
        CovalentDynamicFormsModule, MdButtonModule, MdSelectModule, CovalentStepsModule, MdSlideToggleModule],
    exports: [MdButtonModule, MdInputModule, MdGridListModule, MdListModule, MdCardModule, FormsModule, BrowserModule,
        CovalentDynamicFormsModule, MdButtonModule, MdSelectModule, CovalentStepsModule, MdSlideToggleModule],
    providers: [],
})
export class LocationManagerMaterialModule { }
