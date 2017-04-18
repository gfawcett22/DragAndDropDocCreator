import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import * as fromRoot from '../reducers';
import * as drop from '../actions/drop-section.actions';

@Injectable()
export class DragulaActionsService {

    constructor(private store: Store<fromRoot.State>) { }

    onDrop(dropValue) {
        // no drag element found
        if (dropValue[2] === null) {
            return;
        }
        if (dropValue[2].id !== 'dropSection') {
            dropValue[1].remove();
        } else {
            const valueToDrop = dropValue[1];
            const index = this.getElementIndex(valueToDrop);
            console.log(valueToDrop.dataset.id);
            // remove the value so it is not being added by dragula service and is added via action dispatch
            dropValue[1].remove();
            this.store.dispatch(new drop.InsertAction({id: 1, title: valueToDrop.innerText, index: index}));
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