import { StateType, ActionType } from 'typesafe-actions';

declare module 'SopviewTypes' {
    export type Store = StateType<typeof import('./index').default>;
    export type Action = ActionType<typeof import('./action').default>;
    export type State = StateType<ReturnType<typeof import('./reducer').default>>;
}

declare module 'typesafe-actions' {
    interface Types {
        RootAction: ActionType<typeof import('./action').default>;
    }
}