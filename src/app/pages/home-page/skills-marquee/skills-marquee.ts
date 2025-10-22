import { Component, inject } from '@angular/core';
import { SkillsDataService } from '../../../data/skills-data.service';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';



@Component({
  selector: 'skills-marquee',
  imports: [NgxMarqueeComponent, SafeHtmlPipe],
  styleUrl: './skills-marquee.css',
  templateUrl: './skills-marquee.html',
})
export class SkillsMarquee {
  skillsDataService = inject(SkillsDataService);
  skillsData = this.skillsDataService.getSkillsData();
 }
