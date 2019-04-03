import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drawAsterisk'
})
export class DrawAsteriskPipe implements PipeTransform {
  private strNew: string;
// this pipe is supposed to add stars after number based on the number, but I was unable to complete this, so I commented it out
  transform(counter: number): any {
   const strNew = '';
   if (counter < 5) {
      return strNew;
    } else if (counter === 5) {
     return this.strNew;
   } else if (counter > 5) {
     this.strNew = this.strNew + '*';

   } else { return this.strNew;

    }

  }

}
