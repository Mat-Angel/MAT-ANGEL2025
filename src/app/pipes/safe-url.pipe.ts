import { inject, Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'SafeUrl',
})
export class SafeUrlPipe implements PipeTransform {
private _sanitizer = inject(DomSanitizer);

  transform(value: string): SafeResourceUrl {
    const safeURL =value ? this._sanitizer.bypassSecurityTrustResourceUrl(value): this._sanitizer.bypassSecurityTrustResourceUrl('');
    return safeURL;
  }

}
