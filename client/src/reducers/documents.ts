import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from '../actions/documents';

export type DocumentsState = Readonly<{
    documents: Array<Metadata>;
    currentDocument: Metadata;
    viewerOpen: boolean;
    renameOpen: boolean;
    deleteOpen: boolean;

    uploadOpen: boolean;
    uploaderOpen: boolean;
    uploading: boolean;
    uploadSuccess: boolean;
    uploadError: boolean;
    files: Array<File>;
    uploadPercent: number;
}>;

export type DocumentsAction = ActionType<typeof actions>;

const initialState: DocumentsState = {
    documents: [],
    currentDocument: { filename: '', url: '' },
    viewerOpen: false,
    renameOpen: false,
    deleteOpen: false,

    uploadOpen: false,
    uploaderOpen: false,
    uploading: false,
    uploadSuccess: false,
    uploadError: false,
    files: [],
    uploadPercent: 0
};

const documentsReducer = createReducer<DocumentsState, DocumentsAction>(initialState, {
    SET_DOCUMENTS: (state, action) => Object.assign({}, state, {
        documents: action.payload
    }),
    REMOVE_DOCUMENT: (state, action) => Object.assign({}, state, {
        documents: state.documents.filter(document => document !== action.payload)
    }),
    OPEN_VIEWER: (state, action) => Object.assign({}, state, {
        viewerOpen: true,
        currentDocument: action.payload
    }),
    CLOSE_VIEWER: (state, _) => Object.assign({}, state, {
        viewerOpen: false,
        currentDocument: { filename: '', url: '' }
    }),
    OPEN_RENAME: (state, action) => Object.assign({}, state, {
        renameOpen: true,
        currentDocument: action.payload
    }),
    CLOSE_RENAME: (state, _) => Object.assign({}, state, {
        renameOpen: false,
        currentDocument: { filename: '', url: '' }
    }),
    OPEN_DELETE: (state, action) => Object.assign({}, state, {
        deleteOpen: true,
        currentDocument: action.payload
    }),
    CLOSE_DELETE: (state, _) => Object.assign({}, state, {
        deleteOpen: false,
        currentDocument: { filename: '', url: '' }
    }),
    OPEN_UPLOAD: (state, _) => Object.assign({}, state, {
        uploadOpen: true,
    }),
    CLOSE_UPLOAD: (state, _) => Object.assign({}, state, {
        uploadOpen: false,
    }),
    CLOSE_UPLOADER: (state, _) => Object.assign({}, state, {
        uploaderOpen: false
    }),
    START_UPLOAD: (state, action) => Object.assign({}, state, {
        uploadOpen: false,
        uploaderOpen: true,
        uploading: true,
        uploadSuccess: false,
        uploadError: false,
        files: action.payload,
        uploadPercent: 0
    }),
    UPLOAD_SUCCESS: (state, _) => Object.assign({}, state, {
        uploading: false,
        uploadSuccess: true,
    }),
    UPLOAD_ERROR: (state, _) => Object.assign({}, state, {
        uploading: false,
        uploadError: true,
    }),
    UPDATE_UPLOAD_PROGRESS: (state, action) => Object.assign({}, state, {
        uploadPercent: action.payload
    }),
});

export default documentsReducer;