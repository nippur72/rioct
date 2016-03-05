import * as React from "react";
export declare class Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor();
}
export declare class Tag extends React.Component<any, any> implements Observable {
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
export declare function template(tagName: any): (target: Function) => void;
