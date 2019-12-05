import { action } from 'typesafe-actions';
import { OPEN_RENAME, CLOSE_RENAME, OPEN_DELETE, CLOSE_DELETE } from '../constants';

export const openRename = () => action(OPEN_RENAME);
export const closeRename = () => action(CLOSE_RENAME);

export const openDelete = () => action(OPEN_DELETE);
export const closeDelete = () => action(CLOSE_DELETE);