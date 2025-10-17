import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { stepData } from './data/mentalist.data';
import { MatIconModule } from '@angular/material/icon';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-number-mentalist',
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCard
  ],
  templateUrl: './number-mentalist.component.html',
})
export class NumberMentalistComponent {

  CounterResult = signal<number>(0);
  stepData = signal(stepData);

  onSumCount(number: number){
    this.CounterResult.update(currentValue => currentValue + number)
  }
}
