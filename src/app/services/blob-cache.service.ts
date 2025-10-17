import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class BlobCacheService {
  private http = inject(HttpClient);
  private _sanitizer = inject(DomSanitizer);

  loadPdfBlob(url: string): Observable<string> {
    return this.http
      .get(url, { responseType: 'blob' as const }).pipe(
        map(b => (b.type === 'application/pdf') ? b : new Blob([b], { type: 'application/pdf' })),
        map((pdfBlob) => URL.createObjectURL(pdfBlob))
      );
  }

}
