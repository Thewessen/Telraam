import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hasContent' })
export class HasContent implements PipeTransform {
  transform(content: any[]) {
    return content.filter(content => content.text);
  }
}

/////// Identical except for the pure flag
@Pipe({
  name: 'hasContent',
  pure: false
})
export class HasContentImpure extends HasContent {}
