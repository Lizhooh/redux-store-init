
export interface IOptions {
    devtool?: Boolean,
    reducers: Object,
    compose?: Array<any>,
    applyMiddlewares?: Array<any>,
}

export default function (options: IOptions, applyMiddlewares?: Array<any>): any;

