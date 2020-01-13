import { action } from 'typesafe-actions';
import { Dispatch } from 'redux';
import axios from 'axios';

import {
    SET_DOCUMENTS,
    OPEN_VIEWER,
    CLOSE_VIEWER,
    OPEN_RENAME,
    CLOSE_RENAME,
    OPEN_DELETE,
    CLOSE_DELETE,
    OPEN_UPLOAD,
    CLOSE_UPLOAD,
    START_UPLOAD,
    PAUSE_UPLOAD,
    UPLOAD_SUCCESS,
    UPLOAD_ERROR,
    CLOSE_UPLOADER,
    UPDATE_UPLOAD_PROGRESS
} from '../constants';

// loadSOPs
export const loadDocuments = () => {
    return (dispatch: Dispatch) => {
        axios.post('/documents/load_documents', { 'email': 'zach.lindner@hotmail.com' })
            .then(res => {
                console.log(res);
                
                if (res.data.length > 0) {
                    dispatch(setDocuments(res.data));
                }
            })
            .catch(err => {
                console.log(err.response);
            });
    }
};

export const setDocuments = (sops: Array<SOP>) => action(SET_DOCUMENTS, sops);

/**
 * Action for opening the viewer modal for an SOP
 * @param sop the SOP being viewed
 */
export const openViewer = (sop: SOP) => action(OPEN_VIEWER, sop);

/**
 * Action for closing the viewer modal
 */
export const closeViewer = () => action(CLOSE_VIEWER);

/**
 * Action for opening the rename modal for an SOP
 * @param sop the SOP being renamed
 */
export const openRename = (sop: SOP) => action(OPEN_RENAME, sop);

/**
 * Action for closing the rename modal
 */
export const closeRename = () => action(CLOSE_RENAME);

/**
 * Action for confirming the rename of an SOP
 * @param sop the SOP being renamed
 * @param newFilename the SOP's new filename
 */
export const confirmRename = (sop: SOP, newFilename: string) => {
    return (dispatch: Dispatch) => {
        // TODO rename, need email here to find file in db
        if (newFilename !== '' && sop.filename !== newFilename) {
            console.log('changing ' + sop.filename + ' to ' + newFilename);
        }

        dispatch(closeRename());
    };
};

/**
 * Action for opening the delete modal for an SOP
 * @param sop the SOP being deleted
 */
export const openDelete = (sop: SOP) => action(OPEN_DELETE, sop);

/**
 * Action for closing the delete modal
 */
export const closeDelete = () => action(CLOSE_DELETE);

/**
 * Action for confirming the deletion of an SOP
 * @param sop the sop being deleted
 */
export const confirmDelete = (sop: SOP) => {
    return (dispatch: Dispatch) => {
        // TODO delete, need email here to find file in db
        console.log('deleting ' + sop.filename);

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

        let filenames = new Array();
        let uploadSize = 0; // total bytes being uploaded
        let uploaded = 0; // current bytes uploaded

        for (let file of files) {
            filenames.push(file.name);
            uploadSize += file.size;
        }

        // delay 500ms to allow uploader to copmlete transition
        setTimeout(() => axios.post('/documents/generate_signatures', filenames)
            .then(res => {
                const signatures = res.data;

                for (let i = 0; i < signatures.length; i++) {
                    let data = new FormData();

                    Object.keys(signatures[i].fields).forEach(key => {
                        data.append(key, signatures[i].fields[key]);
                    });
    
                    data.append('file', files[i]);

                    const config = {
                        onUploadProgress: (event: ProgressEvent) => {
                            let percent = parseFloat(((event.loaded + uploaded) / uploadSize).toFixed(2));
                            dispatch(updateUploadProgress(percent));
                        },
                        cancelToken: new CancelToken(c => (cancel = c)),
                        headers: { 'Content-Type': 'application/pdf' }
                    };
    
                    axios.post(signatures[i].url, data, config)
                        .then(() => {
                            axios.post('/documents/add_document', { email: 'zach.lindner@hotmail.com', filename: files[i].name})
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err.response));

                            if (i === signatures.length - 1) {
                                dispatch(uploadSuccess());
                                
                                // TODO textract files
                            } else {
                                uploaded += files[i].size;
                            }
                        })
                        .catch(err => {
                            if (axios.isCancel(err)) {
                                dispatch(closeUploader());
                            } else {
                                console.log(err.response);
                                dispatch(uploadError());
                            }
                        });
                }
            })
            .catch(err => {
                console.log(err.response);
            }), 500);
    };
};

export const updateUploadProgress = (percent: number) => action(UPDATE_UPLOAD_PROGRESS, percent);
