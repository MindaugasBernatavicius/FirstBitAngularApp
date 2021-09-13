import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ name: 'convertToSpace' })
// export class ConvertToSpacePipe implements PipeTransform {
//   transform(valueToBeCleaned: string, characterToReplace: string): string {
//     // return valueToBeCleaned.replace(/(-|\$)+| {2,}/g, ' ');
//     // console.log(new RegExp(characterToReplace + '+', 'g'));
//     return valueToBeCleaned.replace(new RegExp(characterToReplace + '+', 'g'), ' ');
//   }
// }


@Pipe({ name: 'convertToSpace' })
export class ConvertToSpacePipe implements PipeTransform {
  transform(valueToBeCleaned: string, charactersToReplace: string[]): string {
    for (let i = 0; i < charactersToReplace.length; i++) {
      valueToBeCleaned = valueToBeCleaned.replace(new RegExp(charactersToReplace[i] + '+', 'g'), i === 0 ? ' ' : '')
    }
    return valueToBeCleaned;
  }
}
