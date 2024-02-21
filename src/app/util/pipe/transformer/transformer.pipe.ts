import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformer',
})
export class TransformerPipe<T> implements PipeTransform {
  transform(target: T, transformFunc: (item: T) => any): any {
    if (!transformFunc) {
      return target;
    }

    return transformFunc(target);
  }
}
