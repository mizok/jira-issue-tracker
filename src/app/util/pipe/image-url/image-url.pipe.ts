import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  transform(path: string): unknown {
    console.log(`url('${path}')`);
    return `url('${path}')`;
  }
}
