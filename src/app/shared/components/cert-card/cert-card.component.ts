import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'cert-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cert-card.component.html',
})
export class CertCardComponent {
  cardData = input.required<CertData>();

  certPdf = output<PdfInfo>();


  showCert(){
    let pdfData: PdfInfo = {
      showPDF: true,
      fileUrl: this.cardData().fileUrl,
      title: this.cardData().title
    }

    this.certPdf.emit(pdfData);

  }
}
