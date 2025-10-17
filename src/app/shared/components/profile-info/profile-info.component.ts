import { Component, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../../auth/services/auth.service';
import { AvatarImagePipe } from '../../../pipes/avatarImage.pipe';
import { RoundedIconComponent } from "../rounded-icon/rounded-icon.component";

@Component({
  selector: 'profile-info',
  imports: [RouterLink, RoundedIconComponent, AvatarImagePipe, MatMenuModule,MatButtonModule],
  templateUrl: './profile-info.component.html',
})
export class ProfileInfoComponent {
  // @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;   //* Old method
  trigger = viewChild.required(MatMenuTrigger);

  authService = inject(AuthService);


}
