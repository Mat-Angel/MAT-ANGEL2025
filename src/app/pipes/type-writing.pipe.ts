import { Pipe, type PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'typeWriting',
})
export class TypeWritingPipe implements PipeTransform {

  transform(value: string, typingSpeed: number = 100): Observable<string> {

    return new Observable<string>(observer => {
      let i = 0;

      setTimeout(() => {

        const interval = setInterval(() => {

          if (i < value.length) {
            observer.next(value.substring(0, i + 1));
            i++;
          }

          else {
            observer.complete();
            clearInterval(interval);
          }
        }, typingSpeed);

      }, 1500)
    });

  }

}
