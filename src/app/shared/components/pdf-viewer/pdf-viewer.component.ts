// pdf-viewer.component.ts
import { Component, input, computed, inject, linkedSignal, output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatAnchor } from "@angular/material/button";


@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.component.html',
    imports: [MatAnchor],
})
export class PdfViewerComponent {
    private _sanitizer = inject(DomSanitizer);
    url = input.required<string>();
    blobUrl = input.required<string>();
    errorMessage = input<string | unknown | null>();
    isLoading = input<boolean>(false);
    isEmpty = input<boolean>(false);

    cleanSelected = output();
    
    urlSecured = computed(()=> this.blobUrl() ? this._sanitizer.bypassSecurityTrustResourceUrl(this.blobUrl()) : this._sanitizer.bypassSecurityTrustResourceUrl(''))
    urlSecured2 = computed(()=> this.blobUrl() ? this._sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/gview?embedded=true&url=${this.url()}`): this._sanitizer.bypassSecurityTrustResourceUrl(''))



  

}
