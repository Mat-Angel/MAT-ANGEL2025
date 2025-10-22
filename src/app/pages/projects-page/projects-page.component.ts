import { Component, inject } from '@angular/core';
import { SkillsDataService } from '../../data/skills-data.service';
import { ProjectsDataService } from '../../data/projects-data.service';
import { RouterLink } from '@angular/router';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, SafeHtmlPipe],
  templateUrl: './projects-page.component.html',
})
export class ProjectsPageComponent {
  skillsDataService = inject(SkillsDataService);
  projectsDataService = inject(ProjectsDataService);

  skillsData = this.skillsDataService.getSkillsData();
  projectsData = this.projectsDataService.getProjectsData();

}
