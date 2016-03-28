import * as React from "react";
export declare class Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor();
}
export declare class Component<P, S> implements React.ComponentLifecycle<P, S> {
    constructor(props?: P, context?: any);
    setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
    setState(state: S, callback?: () => any): void;
    forceUpdate(callBack?: () => any): void;
    render: () => JSX.Element;
    props: P;
    state: S;
    context: {};
    refs: {};
}
export declare class Tag extends Component<any, any> implements Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor(props: any);
    update(): void;
}
export declare function mount(selector?: string, tag?: any, props?: any): void;
export declare var tags: tagEntry;
export declare var styles: any[];
export declare function updateStyles(): void;
export declare var styleParser: (css: string) => string;
export declare function template(tagName: string | Function): (target: Function) => void;
