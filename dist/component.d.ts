/// <reference types="react" />
import * as React from "react";
export declare class Component<P, S> implements React.ComponentLifecycle<P, S> {
    constructor(props?: P, context?: any);
    constructor(...args: any[]);
    setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
    setState(state: S, callback?: () => any): void;
    forceUpdate(callBack?: () => any): void;
    props: {
        children?: React.ReactNode;
    } & P;
    state: S;
    context: any;
    refs: {
        [key: string]: React.ReactInstance;
    };
}
declare var patched: typeof Component;
export default patched;
