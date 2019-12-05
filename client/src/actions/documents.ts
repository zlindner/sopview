import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { OPEN_RENAME, CLOSE_RENAME, OPEN_DELETE, CLOSE_DELETE } from '../constants';

export const openRename = (filename: string) => action(OPEN_RENAME, filename);
export const closeRename = () => action(CLOSE_RENAME);
export const confirmRename = (oldFilename: string, newFilename: string) => {
    return (dispatch: Dispatch) => {
        // TODO rename, need email here to find file in db
        if (oldFilename !== newFilename) {
            console.log('changing ' + oldFilename + ' to ' + newFilename);
        }

        dispatch(closeRename());
    }
}

export const openDelete = (filename: string) => action(OPEN_DELETE, filename);
export const closeDelete = () => action(CLOSE_DELETE);
export const confirmDelete = (filename: string) => {
    return (dispatch: Dispatch) => {
        // TODO delete, need email here to find file in db
        console.log('deleting ' + filename)

        dispatch(closeDelete());
    }
}
