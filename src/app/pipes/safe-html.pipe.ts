import { inject, Pipe, type PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'SafeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
private _sanitizer = inject(DomSanitizer);

  transform(value: string): SafeHtml {
    const safeHtml =value ? this._sanitizer.bypassSecurityTrustHtml(value): this._sanitizer.bypassSecurityTrustHtml('');
    return safeHtml;
  }

}
