import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';

const ADD_DOCUMENTS = 'ADD_DOCUMENTS';

export const addDocuments = (documents: { filename: string; path: string }[]) => action(ADD_DOCUMENTS, documents);
