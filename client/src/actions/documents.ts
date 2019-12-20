import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import {
    OPEN_VIEWER, CLOSE_VIEWER,
    OPEN_RENAME, CLOSE_RENAME,
    OPEN_DELETE, CLOSE_DELETE,
    OPEN_UPLOAD, CLOSE_UPLOAD, START_UPLOAD
} from '../constants';

export const openViewer = (filename: string) => action(OPEN_VIEWER, filename);
export const closeViewer = () => action(CLOSE_VIEWER);

export const openRename = (filename: string) => action(OPEN_RENAME, filename);
export const closeRename = () => action(CLOSE_RENAME);
export const confirmRename = (oldFilename: string, newFilename: string) => {
    return (dispatch: Dispatch) => {
        // TODO rename, need email here to find file in db
        if (newFilename !== '' && oldFilename !== newFilename) {
            console.log('changing ' + oldFilename + ' to ' + newFilename);
        }

        dispatch(closeRename());
    };
};

export const openDelete = (filename: string) => action(OPEN_DELETE, filename);
export const closeDelete = () => action(CLOSE_DELETE);
export const confirmDelete = (filename: string) => {
    return (dispatch: Dispatch) => {
        // TODO delete, need email here to find file in db
        console.log('deleting ' + filename);

        dispatch(closeDelete());
    };
};

export const openUpload = () => action(OPEN_UPLOAD);
export const closeUpload = () => action(CLOSE_UPLOAD);

export const startUpload = (files: Array<File>) => action(START_UPLOAD, files);

export const upload = (files: Array<File>) => {
    return (dispatch: Dispatch) => {
        dispatch(startUpload(files));
    };
};
