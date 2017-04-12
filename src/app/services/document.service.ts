import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDocumentSection } from 'app/models/document-section.interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { BaseService } from 'app/services/base.service';

@Injectable()
export class DocumentService extends BaseService{

  constructor(private http: Http) { super(); }

  getDraggableSections(): Observable<IDocumentSection[]> {
    const url = '/src/data/sections.json';
    return this.http.get(url)
      .map(super.extractData)
      // .do(sections => console.log(sections))
      .catch(super.handleError);
  }
}
