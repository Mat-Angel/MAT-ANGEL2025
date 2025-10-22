import { Component, computed, inject, signal } from '@angular/core';
import { TypeWritingPipe } from '../../pipes/type-writing.pipe';
import { CommonModule } from '@angular/common';
import { SkillsDataService } from '../../data/skills-data.service';
import { RouterLink } from '@angular/router';
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";
import { ProjectsDataService } from '../../data/projects-data.service';
import { CertCardComponent } from "../../shared/components/cert-card/cert-card.component";
import { MatButtonModule } from '@angular/material/button';
import { SafeResourceUrl } from '@angular/platform-browser';
import { PdfViewerComponent } from "../../shared/components/pdf-viewer/pdf-viewer.component";
import { BlobCacheService } from '../../services/blob-cache.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { environment } from '@environments/environment';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { SkillsMarquee } from "./skills-marquee/skills-marquee";

@Component({
  selector: 'app-home-page',
  imports: [TypeWritingPipe, CommonModule, RouterLink, InfoCardComponent, CertCardComponent, MatButtonModule, PdfViewerComponent, SafeHtmlPipe, SkillsMarquee],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePageComponent {
  skillsDataService = inject(SkillsDataService);
  projectsDataService = inject(ProjectsDataService);
  blobCacheService = inject(BlobCacheService);

  readonly baseUrl = computed(()=> environment.gitRawUrl)


  skillsData = this.skillsDataService.getSkillsData();
  projectsData = this.projectsDataService.getProjectsData();
  certsData = this.projectsDataService.getCertsData();


  safePdfUrl = signal<SafeResourceUrl | null>(null);
  blobPdfUrl = signal<string>('')

  certPdf = signal<PdfInfo>({
    showPDF: false,
    fileUrl: null,
    title: null
  })

  showCertificate(data: PdfInfo) {
    this.certPdf.update((value) => ({
      ...value, showPDF: data.showPDF, title: data.title, fileUrl: data.fileUrl
    }));
  }

  cleanCertificate() {
    this.certPdf.update((value) => ({
      ...value, showPDF: false, title: '', fileUrl: ''
    }));
  }

  pdfResource = rxResource({
    params: () => ({ url: this.certPdf().fileUrl }),
    stream: ({ params }) => {
      if (!params.url) return of(null);

      return this.blobCacheService.loadPdfBlob(params.url);
    },
  });



}
