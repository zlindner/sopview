import { StateType, ActionType } from 'typesafe-actions';

declare module 'Sopview' {
    export type Store = StateType<typeof import('./store').default>;
    export type Action = ActionType<typeof import('./action').default>;
    export type State = StateType<ReturnType<typeof import('./reducer').default>>;

    export type Document = {
        filename: string;
        path: string;
        bytes: { type: string; data: number[] };
    };
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<typeof import('./action').default>;
    }
}

declare global {}
