import {IDocumentSection} from './document-section.interface';

export interface IDocumentSectionInsert extends IDocumentSection {
    // add the index where the section should be added
    index: number;
}
