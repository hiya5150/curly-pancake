import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drawAsterisk'
})
export class DrawAsteriskPipe implements PipeTransform {
  private strNew: string;
// this pipe adds stars after number based on the number
  transform(counter: number): any {
   const strNew = '';
   if (counter < 5) {
      return this.strNew;
    } else if (counter === 5) {
     this.strNew = '*';
     return this.strNew;
   } else if (counter % 5 === 0) {
     this.strNew = this.strNew + '*';
     return this.strNew;

   } else { return this.strNew;

    }

  }

}
