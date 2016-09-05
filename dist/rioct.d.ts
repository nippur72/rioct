import Component from "./component";
export declare class Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor();
}
export declare class Tag extends Component {
    update(): void;
}
export declare class ObservableTag extends Tag implements Observable {
    on(events: string, callback: Function): void;
    one(events: string, callback: Function): void;
    off(events: string): void;
    trigger(eventName: string, ...args: any[]): void;
    constructor(props: any);
}
export declare function mount(selector?: string, tag?: any, props?: any): void;
export interface tagEntry {
    [tagName: string]: () => void;
}
export declare var tags: tagEntry;
export declare var styles: any[];
export declare function updateStyles(): void;
export declare type StyleParser = (css: string) => string;
export declare function setStyleParser(parser: StyleParser): void;
export declare function template(tagName: string | Function): (target: Function) => void;
