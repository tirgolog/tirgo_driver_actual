import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatTimePipe} from './format-time.pipe';
import { NtobrPipe } from './ntobr.pipe';
import { TransportType } from './transport-type.pipe';
import { NumberFormatPipe } from './number-formant.pipe';

@NgModule({
    declarations: [
        FormatTimePipe,
        NtobrPipe,
        TransportType,
        NumberFormatPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FormatTimePipe,
        NtobrPipe,
        TransportType,
        NumberFormatPipe

    ]
})
export class MainPipeModule {
}
