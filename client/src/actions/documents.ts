import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import axios from 'axios';

import {
    OPEN_VIEWER, CLOSE_VIEWER,
    OPEN_RENAME, CLOSE_RENAME,
    OPEN_DELETE, CLOSE_DELETE,
    OPEN_UPLOAD, CLOSE_UPLOAD, START_UPLOAD, PAUSE_UPLOAD, UPLOAD_SUCCESS, UPLOAD_ERROR, CLOSE_UPLOADER, UPDATE_UPLOAD_PROGRESS
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

/**
 * Upload
 */

const CancelToken = axios.CancelToken;
let cancel: Function;

export const openUpload = () => action(OPEN_UPLOAD);
export const closeUpload = () => action(CLOSE_UPLOAD);

export const startUpload = (files: Array<File>) => action(START_UPLOAD, files);
// TODO pauseUpload
export const cancelUpload = () => {
    return (_: Dispatch) => {
        cancel();
    };
};

export const uploadSuccess = () => action(UPLOAD_SUCCESS);
export const uploadError = () => action(UPLOAD_ERROR);
export const closeUploader = () => action(CLOSE_UPLOADER);

export const upload = (files: Array<File>) => {
    return (dispatch: Dispatch) => {
        dispatch(startUpload(files));

        let data = new FormData();

        for (let file of files) {
            data.append('files[]', file);
        }

        const config = {
            onUploadProgress: (event: ProgressEvent) => {
                let percent = parseFloat((event.loaded / event.total).toFixed(2));
                dispatch(updateUploadProgress(percent));
            },
            cancelToken: new CancelToken((c) => cancel = c)
        };

        setTimeout(() => axios.post('/documents/upload', data, config)
            .then(res => {
                console.log(res);
                dispatch(uploadSuccess());
            })
            .catch(err => {
                if (axios.isCancel(err)) {
                    console.log('cancel');
                    dispatch(closeUploader());
                } else {
                    console.log(err);
                    dispatch(uploadError());
                }
            }), 500);
    };
};

export const updateUploadProgress = (percent: number) => action(UPDATE_UPLOAD_PROGRESS, percent);
