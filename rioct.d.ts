/// <reference path="typings/lodash/lodash.d.ts" />
/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
/// <reference path="observable.d.ts" />
/// <reference path="types.d.ts" />
import * as React from "react";
declare class Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor();
}
declare class Tag extends React.Component<any, any> implements Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor(props: any);
    update(): void;
}
declare function mount(selector?: string, tag?: any, props?: any): void;
declare var tags: tagEntry;
declare var styles: any[];
declare function updateStyles(): void;
declare var styleParser: (css: string) => string;
declare function template(tagName: any): (target: Function) => void;
export { Observable, Tag, mount, tags, styles, updateStyles, styleParser, template };
