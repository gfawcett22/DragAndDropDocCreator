import { Injectable } from '@angular/core';

@Injectable()
export class DragulaActionsService {

    constructor() { }

    onDrop(dropValue){
        if (dropValue[2] === null){
            return;
        }
        if (dropValue[2].id !== 'dropSection' && dropValue[2].id !== dropValue[3].id){
            dropValue[1].remove();
        }
    }
}