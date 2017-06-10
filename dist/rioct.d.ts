import Component from "./component";
export declare class Tag<P = any, S = any> extends Component<P, S> {
    update(): void;
}
export declare function mount(selector?: string, tag?: any, props?: any): void;
export declare let styles: any[];
export declare function updateStyles(): void;
export declare type StyleParser = (css: string) => string;
export declare function setStyleParser(parser: StyleParser): void;
