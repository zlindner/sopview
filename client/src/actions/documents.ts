import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import electron from 'electron';
import Types from 'Sopview';

const ADD_DOCUMENTS = 'ADD_DOCUMENTS';
const DELETE_DOCUMENT = 'DELETE_DOCUMENT';

export const addDocuments = (documents: Types.Document[]) => action(ADD_DOCUMENTS, documents);
export const deleteDocument = (document: Types.Document) => action(DELETE_DOCUMENT, document);
