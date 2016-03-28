import * as React from "react";
export declare class Component implements React.ComponentLifecycle<any, any> {
    constructor(props?: any, context?: any);
    setState(f: (prevState: any, props: any) => any, callback?: () => any): void;
    setState(state: any, callback?: () => any): void;
    forceUpdate(callBack?: () => any): void;
    props: any;
    state: any;
    context: {};
    refs: {};
}
declare var patched: typeof Component;
export default patched;
