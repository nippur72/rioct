/// <reference types="react" />
import * as React from "react";
export interface Component<P, S> extends React.ComponentLifecycle<P, S> {
}
export declare class Component<P, S> {
    constructor(props?: P, context?: any);
    setState<K extends keyof S>(f: (prevState: S, props: P) => Pick<S, K>, callback?: () => any): void;
    setState<K extends keyof S>(state: Pick<S, K>, callback?: () => any): void;
    forceUpdate(callBack?: () => any): void;
    props: Readonly<{
        children?: React.ReactNode;
    }> & Readonly<P>;
    state: Readonly<S>;
    context: any;
    refs: {
        [key: string]: React.ReactInstance;
    };
}
declare var patched: typeof Component;
export default patched;
