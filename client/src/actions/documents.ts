import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import electron from 'electron';
import Types from 'Sopview';

const ADD_DOCUMENTS = 'ADD_DOCUMENTS';

export const addDocuments = (documents: Types.Document[]) => action(ADD_DOCUMENTS, documents);
