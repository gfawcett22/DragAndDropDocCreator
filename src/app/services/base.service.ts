import { Observable } from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/observable/throw';

export class BaseService {
    protected extractData(response: Response) {
        const body = response.json();
        return body.data || {};
    }
    protected handleError(error) {
        // send error to server for logging
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}