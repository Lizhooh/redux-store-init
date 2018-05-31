import * as Redux from 'redux';

export interface Reducers {
    [rest: string]: Redux.Reducer<any>,
}

export interface IOptions {
    reducers?: Reducers,
    devtool?: boolean,
    compose?: any[],
    initState?: any,
    applyMiddlewares?: any[],
}

export default function (options: IOptions, applyMiddlewares?: any[]): Redux.Store<any>;


