import { Injectable } from '@angular/core';

@Injectable()
export class DragulaActionsService {

    constructor() { }

    onDrop(dropValue) {
        // no drag element found
        console.log(dropValue);
        if (dropValue[2] === null) {
            return;
        }
        if (dropValue[2].id !== 'dropSection') {
            dropValue[1].remove();
        } else {
            // dispatch store action?
            const valueToDrop = dropValue[1];
            const index = this.getElementIndex(valueToDrop);
            console.log(valueToDrop);

        }
    }
    private getElementIndex(el: any) {
    if (el && el.parentElement) {
      return [].slice.call(el.parentElement.children).indexOf(el);
    } else {
      return -1;
    }
  }
}